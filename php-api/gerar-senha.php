<?php
// Execute no terminal: php php-api/gerar-senha.php SUA_SENHA_AQUI
// Cole o resultado no ADMIN_PASSWORD_HASH do config.php
// Apague este arquivo depois de usar.

if (empty($argv[1])) {
    echo "Uso: php gerar-senha.php SUA_SENHA\n";
    exit(1);
}
echo password_hash($argv[1], PASSWORD_BCRYPT) . "\n";
