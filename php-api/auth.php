<?php
require_once __DIR__ . '/config.php';
cors();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body  = json_decode(file_get_contents('php://input'), true) ?? [];
    $email = trim($body['email'] ?? '');
    $pass  = $body['password'] ?? '';

    if ($email !== ADMIN_EMAIL || !password_verify($pass, ADMIN_PASSWORD_HASH)) {
        json(['error' => 'Credenciais inválidas'], 401);
    }
    json(['token' => makeToken($email)]);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $email = verifyToken();
    if (!$email) json(['error' => 'Token inválido'], 401);
    json(['email' => $email, 'valid' => true]);
}
