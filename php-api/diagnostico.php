<?php
header('Content-Type: application/json; charset=utf-8');

$result = [];

// 1. Versão do PHP
$result['php_version'] = PHP_VERSION;

// 2. Teste de conexão com o banco
try {
    $pdo = new PDO(
        'mysql:host=localhost;dbname=peraci18_blog;charset=utf8mb4',
        'peraci18_admin',
        '*{&Wh&f,=-J$',
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    $result['banco'] = 'OK - conectado';

    // Verifica se a tabela existe
    $st = $pdo->query("SHOW TABLES LIKE 'posts'");
    $result['tabela_posts'] = $st->rowCount() > 0 ? 'OK - existe' : 'ERRO - tabela não encontrada';

} catch (Exception $e) {
    $result['banco'] = 'ERRO: ' . $e->getMessage();
}

// 3. Teste do password_verify com hash $2b$
$hash = '$2b$12$EyRg8V9URKcQmWS5fosyh.JalRpsZvMMKUV44KLyMauIBrgr8uiHW';
$result['password_verify_2b'] = password_verify('sua_senha_aqui', $hash) ? 'OK' : 'FALHOU (esperado se senha errada)';
$result['hash_info'] = password_get_info($hash);

echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
