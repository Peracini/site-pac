<?php
require_once __DIR__ . '/config.php';
cors();

// ── POST — registra uma visita ───────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body     = json_decode(file_get_contents('php://input'), true) ?? [];
    $page     = substr(trim($body['page'] ?? '/'), 0, 255);
    $referrer = substr(trim($body['referrer'] ?? ''), 0, 500);
    $title    = substr(trim($body['title'] ?? ''), 0, 255);

    // Ignora bots comuns
    $ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
    $bots = ['bot', 'crawler', 'spider', 'slurp', 'curl', 'wget', 'python', 'php'];
    foreach ($bots as $b) {
        if (stripos($ua, $b) !== false) {
            json_out(['ok' => false, 'reason' => 'bot']);
        }
    }

    // Detecta dispositivo
    $device = 'desktop';
    if (preg_match('/Mobile|Android|iPhone|iPad/i', $ua)) {
        $device = preg_match('/iPad/i', $ua) ? 'tablet' : 'mobile';
    }

    // Detecta navegador
    $browser = 'Outro';
    if (strpos($ua, 'Chrome') !== false)  $browser = 'Chrome';
    elseif (strpos($ua, 'Safari') !== false)  $browser = 'Safari';
    elseif (strpos($ua, 'Firefox') !== false) $browser = 'Firefox';
    elseif (strpos($ua, 'Edge') !== false)    $browser = 'Edge';

    // Hash do IP (privacidade — não armazena IP real)
    $ip_hash = md5(($_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '') . date('Y-m-d'));

    try {
        $st = db()->prepare(
            'INSERT INTO page_views (page, title, referrer, device, browser, ip_hash)
             VALUES (?, ?, ?, ?, ?, ?)'
        );
        $st->execute([$page, $title, $referrer, $device, $browser, $ip_hash]);
        json_out(['ok' => true]);
    } catch (Exception $e) {
        json_out(['ok' => false, 'error' => $e->getMessage()]);
    }
}

// ── GET — retorna estatísticas (só admin) ────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    requireAuth();

    $db = db();

    // Totais
    $totais = $db->query("
        SELECT
          COUNT(*) AS total,
          COUNT(DISTINCT ip_hash) AS unicos,
          COUNT(CASE WHEN DATE(created_at) = CURDATE() THEN 1 END) AS hoje,
          COUNT(CASE WHEN created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY) THEN 1 END) AS semana,
          COUNT(CASE WHEN created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 1 END) AS mes
        FROM page_views
    ")->fetch();

    // Páginas mais visitadas (top 10)
    $paginas = $db->query("
        SELECT page, title, COUNT(*) AS visitas,
               COUNT(DISTINCT ip_hash) AS unicos
        FROM page_views
        GROUP BY page, title
        ORDER BY visitas DESC
        LIMIT 10
    ")->fetchAll();

    // Últimos 30 dias (gráfico)
    $grafico = $db->query("
        SELECT DATE(created_at) AS dia, COUNT(*) AS visitas
        FROM page_views
        WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
        GROUP BY DATE(created_at)
        ORDER BY dia ASC
    ")->fetchAll();

    // Dispositivos
    $dispositivos = $db->query("
        SELECT device, COUNT(*) AS total
        FROM page_views
        GROUP BY device
        ORDER BY total DESC
    ")->fetchAll();

    // Navegadores
    $navegadores = $db->query("
        SELECT browser, COUNT(*) AS total
        FROM page_views
        GROUP BY browser
        ORDER BY total DESC
    ")->fetchAll();

    // Origens (referrers)
    $origens = $db->query("
        SELECT referrer, COUNT(*) AS total
        FROM page_views
        WHERE referrer != '' AND referrer NOT LIKE '%pacadvogados.com.br%'
        GROUP BY referrer
        ORDER BY total DESC
        LIMIT 8
    ")->fetchAll();

    // Visitas recentes
    $recentes = $db->query("
        SELECT page, title, device, browser, referrer, created_at
        FROM page_views
        ORDER BY created_at DESC
        LIMIT 20
    ")->fetchAll();

    json_out(compact('totais', 'paginas', 'grafico', 'dispositivos', 'navegadores', 'origens', 'recentes'));
}
