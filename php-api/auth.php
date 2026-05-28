<?php
require_once __DIR__ . '/config.php';
cors();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body  = json_decode(file_get_contents('php://input'), true) ?? [];
    $email = trim($body['email'] ?? '');
    $pass  = $body['password'] ?? '';

    if ($email !== ADMIN_EMAIL || !password_verify($pass, ADMIN_PASSWORD_HASH)) {
        json_out(['error' => 'Credenciais inválidas'], 401);
    }
    json_out(['token' => makeToken($email)]);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $email = verifyToken();
    if (!$email) json_out(['error' => 'Token inválido'], 401);
    json_out(['email' => $email, 'valid' => true]);
}
