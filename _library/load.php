<?php
if(isset($_GET['cid'])){
	if($_GET['cid'] == 'me'){
		include_once "../_me_.html";
	}elseif($_GET['cid'] == 'portafolio'){
		include_once "../_portafolio_.html";
	}elseif($_GET['cid'] == 'contact'){
		include_once "../_contact_.html";
	}else{
		echo ":p?";
	}
}else{
	echo ":p";
}
?>