<?php
require_once __DIR__ . '/config.php';
cors();

$method = $_SERVER['REQUEST_METHOD'];
$id     = $_GET['id'] ?? null;

// ── GET — lista documentos (só admin) ───────────────────────────
if ($method === 'GET') {
    requireAuth();
    $docs = db()->query('SELECT * FROM documents ORDER BY created_at DESC')->fetchAll();
    json_out($docs);
}

// ── POST — upload de arquivo ─────────────────────────────────────
if ($method === 'POST') {
    requireAuth();

    if (empty($_FILES['arquivo'])) {
        json_out(['error' => 'Nenhum arquivo enviado'], 400);
    }

    $titulo    = trim($_POST['titulo'] ?? '');
    $slug      = trim($_POST['slug'] ?? '');
    $descricao = trim($_POST['descricao'] ?? '');

    if (!$titulo || !$slug) {
        json_out(['error' => 'Título e slug são obrigatórios'], 422);
    }

    // Valida slug (só letras, números e hífens)
    $slug = preg_replace('/[^a-z0-9\-]/', '', strtolower($slug));
    if (!$slug) json_out(['error' => 'Slug inválido'], 422);

    $arquivo = $_FILES['arquivo'];
    $ext     = strtolower(pathinfo($arquivo['name'], PATHINFO_EXTENSION));

    if (!in_array($ext, ['html', 'htm', 'pdf'])) {
        json_out(['error' => 'Tipo não permitido. Use HTML ou PDF.'], 422);
    }

    $tipo     = ($ext === 'pdf') ? 'pdf' : 'html';
    $filename = $slug . '.' . $ext;
    $docsDir  = __DIR__ . '/../docs';

    // Cria pasta docs se não existir
    if (!is_dir($docsDir)) {
        mkdir($docsDir, 0755, true);
    }

    $destino = $docsDir . '/' . $filename;

    if (!move_uploaded_file($arquivo['tmp_name'], $destino)) {
        json_out(['error' => 'Erro ao salvar o arquivo no servidor'], 500);
    }

    // Salva no banco
    try {
        $st = db()->prepare(
            'INSERT INTO documents (slug, titulo, tipo, filename, descricao) VALUES (?,?,?,?,?)
             ON DUPLICATE KEY UPDATE titulo=?, tipo=?, filename=?, descricao=?'
        );
        $st->execute([$slug, $titulo, $tipo, $filename, $descricao,
                      $titulo, $tipo, $filename, $descricao]);
        json_out(['ok' => true, 'url' => '/docs/' . $filename, 'filename' => $filename], 201);
    } catch (Exception $e) {
        json_out(['error' => $e->getMessage()], 500);
    }
}

// ── DELETE ────────────────────────────────────────────────────────
if ($method === 'DELETE') {
    requireAuth();
    if (!$id) json_out(['error' => 'id obrigatório'], 400);

    $doc = db()->prepare('SELECT * FROM documents WHERE id = ?');
    $doc->execute([$id]);
    $row = $doc->fetch();

    if (!$row) json_out(['error' => 'Documento não encontrado'], 404);

    // Remove arquivo físico
    $filepath = __DIR__ . '/../docs/' . $row['filename'];
    if (file_exists($filepath)) unlink($filepath);

    db()->prepare('DELETE FROM documents WHERE id = ?')->execute([$id]);
    json_out(['deleted' => true]);
}
