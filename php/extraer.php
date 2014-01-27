<?php
	include_once('simple_html_dom.php');
	$direccion = $_POST["url"];
	$ide = $_POST["ide"];
	$html = file_get_html('http://'.$direccion);
	echo $html->getElementById($ide);
?>