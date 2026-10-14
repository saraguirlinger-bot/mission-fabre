<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

date_default_timezone_set('Europe/Paris');
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    echo json_encode(['success' => false, 'error' => 'Données invalides']);
    exit;
}

$txt = function ($v, $max = 120) { return htmlspecialchars(mb_substr(trim((string)$v), 0, $max), ENT_QUOTES, 'UTF-8'); };
$num = function ($v) { return is_numeric($v) ? round((float)$v, 2) : 0; };

// 6 objectifs de la formation « Construire et piloter la trésorerie de son entreprise »
$chapitres = [];
foreach ([1, 2, 3, 4, 5, 6] as $c) {
    $ch = $data['chapitres'][$c] ?? $data['chapitres'][(string)$c] ?? null;
    $chapitres[$c] = [
        'pct'    => $ch ? intval($ch['pct'] ?? 0) : 0,
        'statut' => $ch ? $txt($ch['statut'] ?? '', 30) : '',
    ];
}
$revoir = [];
foreach (array_slice((array)($data['notions_a_revoir'] ?? []), 0, 30) as $n) { $revoir[] = $txt($n, 160); }

$file = __DIR__ . '/results-tresorerie.json';
$fp = fopen($file, 'c+');
if (!$fp) { echo json_encode(['success' => false, 'error' => 'Écriture impossible']); exit; }
flock($fp, LOCK_EX);
$contenu = stream_get_contents($fp);
$results = json_decode($contenu ?: '[]', true) ?? [];

$results[] = [
    'date'      => date('d/m/Y H:i'),
    'nom'       => $txt($data['nom'] ?? ''),
    'prenom'    => $txt($data['prenom'] ?? ''),
    'classe'    => $txt($data['classe'] ?? '', 40),
    'note'      => $num($data['note'] ?? 0),
    'total'     => $num($data['total'] ?? 0),
    'chapitres' => $chapitres,
    'missions'  => array_map($num, array_slice((array)($data['missions'] ?? []), 0, 7)),
    'notions_a_revoir' => $revoir,
    'code'      => $txt($data['code'] ?? '', 20),
    'duree'     => intval($data['duree'] ?? 0),
];

ftruncate($fp, 0);
rewind($fp);
fwrite($fp, json_encode($results, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
flock($fp, LOCK_UN);
fclose($fp);

echo json_encode(['success' => true]);
?>
