<?php
require_once __DIR__ . '/config.php';
cors();

$method = $_SERVER['REQUEST_METHOD'];
$slug   = $_GET['slug'] ?? null;

// ── GET ─────────────────────────────────────────────────────────
if ($method === 'GET') {
    // Post único por slug
    if ($slug) {
        $st = db()->prepare('SELECT * FROM posts WHERE slug = ? AND published = 1');
        $st->execute([$slug]);
        $post = $st->fetch();
        if (!$post) json(['error' => 'Post não encontrado'], 404);
        $post['body'] = json_decode($post['body'], true);
        json($post);
    }

    // Admin: todos os posts (com auth)
    if (verifyToken()) {
        $posts = db()->query('SELECT * FROM posts ORDER BY date DESC')->fetchAll();
        foreach ($posts as &$p) $p['body'] = json_decode($p['body'], true);
        json($posts);
    }

    // Público: só publicados
    $category = $_GET['category'] ?? null;
    $limit    = intval($_GET['limit'] ?? 0);
    $sql      = 'SELECT id, slug, title, category, excerpt, date, read_time, meta_description FROM posts WHERE published = 1';
    $params   = [];
    if ($category && $category !== 'Todos') {
        $sql .= ' AND category = ?';
        $params[] = $category;
    }
    $sql .= ' ORDER BY date DESC';
    if ($limit > 0) $sql .= ' LIMIT ' . $limit;
    $st = db()->prepare($sql);
    $st->execute($params);
    json($st->fetchAll());
}

// ── POST (criar) ─────────────────────────────────────────────────
if ($method === 'POST') {
    requireAuth();
    $d = json_decode(file_get_contents('php://input'), true) ?? [];
    validate($d);

    $st = db()->prepare('INSERT INTO posts (slug, title, category, excerpt, body, date, read_time, meta_description, published)
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $st->execute([
        $d['slug'], $d['title'], $d['category'], $d['excerpt'],
        json_encode($d['body'], JSON_UNESCAPED_UNICODE),
        $d['date'], $d['read_time'], $d['meta_description'] ?? '', $d['published'] ?? 1,
    ]);
    json(['id' => db()->lastInsertId(), 'slug' => $d['slug']], 201);
}

// ── PUT (editar) ─────────────────────────────────────────────────
if ($method === 'PUT') {
    requireAuth();
    if (!$slug) json(['error' => 'slug obrigatório'], 400);
    $d = json_decode(file_get_contents('php://input'), true) ?? [];
    validate($d);

    $st = db()->prepare('UPDATE posts SET title=?, category=?, excerpt=?, body=?, date=?, read_time=?, meta_description=?, published=?, updated_at=NOW()
                         WHERE slug=?');
    $st->execute([
        $d['title'], $d['category'], $d['excerpt'],
        json_encode($d['body'], JSON_UNESCAPED_UNICODE),
        $d['date'], $d['read_time'], $d['meta_description'] ?? '', $d['published'] ?? 1,
        $slug,
    ]);
    json(['updated' => true]);
}

// ── DELETE ───────────────────────────────────────────────────────
if ($method === 'DELETE') {
    requireAuth();
    if (!$slug) json(['error' => 'slug obrigatório'], 400);
    db()->prepare('DELETE FROM posts WHERE slug = ?')->execute([$slug]);
    json(['deleted' => true]);
}

function validate(array $d): void {
    foreach (['slug', 'title', 'category', 'date', 'body'] as $f) {
        if (empty($d[$f])) json(['error' => "Campo obrigatório: $f"], 422);
    }
}
