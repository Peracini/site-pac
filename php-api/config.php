<?php
// ─── PREENCHA COM AS CREDENCIAIS DO SEU CPANEL ───────────────────
// cPanel → Bancos de Dados MySQL → crie o banco e o usuário lá

define('DB_HOST', 'localhost');
define('DB_NAME', 'SEU_BANCO_AQUI');       // ex: pacadvog_blog
define('DB_USER', 'SEU_USUARIO_AQUI');     // ex: pacadvog_admin
define('DB_PASS', 'SUA_SENHA_AQUI');

// Chave secreta para assinar os tokens de autenticação
// Troque por uma string longa e aleatória — qualquer coisa
define('JWT_SECRET', 'troque-por-uma-chave-longa-e-aleatoria-aqui-2026');

// Login do painel admin
define('ADMIN_EMAIL', 'peracinif@gmail.com');
// Gere o hash da senha rodando: php php-api/gerar-senha.php sua_senha
define('ADMIN_PASSWORD_HASH', '');
// ─────────────────────────────────────────────────────────────────

function db(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        $pdo = new PDO(
            'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
            DB_USER, DB_PASS,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
             PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
        );
    }
    return $pdo;
}

function cors(): void {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Content-Type: application/json; charset=utf-8');
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
}

function json($data, int $code = 200): void {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function makeToken(string $email): string {
    $payload = base64_encode(json_encode(['email' => $email, 'exp' => time() + 86400]));
    $sig     = hash_hmac('sha256', $payload, JWT_SECRET);
    return $payload . '.' . $sig;
}

function verifyToken(): ?string {
    $h = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (!str_starts_with($h, 'Bearer ')) return null;
    [$payload, $sig] = explode('.', substr($h, 7), 2) + [1 => ''];
    if (hash_hmac('sha256', $payload, JWT_SECRET) !== $sig) return null;
    $data = json_decode(base64_decode($payload), true);
    if (!$data || $data['exp'] < time()) return null;
    return $data['email'];
}

function requireAuth(): void {
    if (!verifyToken()) { json(['error' => 'Não autorizado'], 401); }
}
