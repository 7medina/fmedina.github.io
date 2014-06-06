<?php

ob_start();
mail("fabian.boxx@yahoo.com", "Formulario","$mensaje", "$header");
if(isset($_POST['txtNombre'])){ 
	echo "Muchas gracias por contactarse con nosotros.";   
    $mensaje =  "Nombre: ".strip_tags($_POST['txtNombre'])."\n"."\n"."Email: ".strip_tags($_POST['txtMail'])."\n"."Mensaje: ".strip_tags($_POST['txtMensaje']);
    $header = "From: ".strip_tags($_POST['txtMail']).";\r\n" . 'Content-type: text/plain; charset=UTF-8' . "\r\n";
    mail("fabian.boxx@yahoo.com", "Formulario",$mensaje, $header);
     
}else{
	echo "nasoda";
;}
//header("Location: ./#contact")

?>