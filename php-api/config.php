<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'peraci18_blog');
define('DB_USER', 'peraci18_admin');
define('DB_PASS', '*{&Wh&f,=-J$');
define('JWT_SECRET', 'pac-advogados-ribeirão-preto-2026-chave-secreta');
define('ADMIN_EMAIL', 'peracinif@gmail.com');
define('ADMIN_PASSWORD_HASH', '$2b$12$EyRg8V9URKcQmWS5fosyh.JalRpsZvMMKUV44KLyMauIBrgr8uiHW');

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

function json_out($data, int $code = 200): void {
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
    if (substr($h, 0, 7) !== 'Bearer ') return null;
    $parts = explode('.', substr($h, 7), 2);
    if (count($parts) !== 2) return null;
    [$payload, $sig] = $parts;
    if (hash_hmac('sha256', $payload, JWT_SECRET) !== $sig) return null;
    $data = json_decode(base64_decode($payload), true);
    if (!$data || $data['exp'] < time()) return null;
    return $data['email'];
}

function requireAuth(): void {
    if (!verifyToken()) { json_out(['error' => 'Não autorizado'], 401); }
}
