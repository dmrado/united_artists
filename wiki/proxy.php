<?php
$request = $_GET["request"];
$input = "https://ru.wikipedia.org/w/api.php?action=opensearch&search=".$request."&limit=10&format=json";
$result = file_get_contents($input);

echo $result;