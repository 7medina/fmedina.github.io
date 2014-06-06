$("#txtNombre").focus(function(e) {
	if ( document.getElementById("txtNombre").value.length < 1 || document.getElementById("txtNombre").value == 'Tu nombre'){
		document.getElementById("txtNombre").value = '';
	}
});
$("#txtNombre").focusout(function(e) {
    if( document.getElementById("txtNombre").value == ''){
		document.getElementById("txtNombre").value = 'Tu nombre'
	}
});
$("#txtMail").focus(function(e) {
	if ( document.getElementById("txtMail").value.length < 1 || document.getElementById("txtMail").value == 'Tu email, para poder contestarte'){
		document.getElementById("txtMail").value = '';
	}
});
$("#txtMail").focusout(function(e) {
    if( document.getElementById("txtMail").value == ''){
		document.getElementById("txtMail").value = 'Tu email, para poder contestarte'
	}
});
$("#txtMensaje").focus(function(e) {
        if ( document.getElementById("txtMensaje").value.length < 1 || document.getElementById("txtMensaje").value == 'Tu mensaje, pregunta lo que necesites :)'){
		document.getElementById("txtMensaje").value = '';
	}
});
$("#txtMensaje").focusout(function(e) {
    if( document.getElementById("txtMensaje").value == ''){
		document.getElementById("txtMensaje").value = 'Tu mensaje, pregunta lo que necesites :)'
	}
});

$("#FormContacto").submit(function() {	
      //Validar que no esta el etxto predeterminado
	  if (document.getElementById('txtNombre').value == "Tu nombre" || document.getElementById('txtNombre').value == ''  || document.getElementById('txtNombre').value.length < 3){		  
		  $('#txtNombre').css('background-position', '0px -32px');
		  $('#txtNombre').css('color','#000');
		  Errores = true;
	  }
	  else{
		  $('#txtNombre').css('background-position', '0px 0px');
		  $('#txtNombre').css('color','#666');
	  }
	  	
	  if (document.getElementById('txtMail').value == "Tu email, para poder contestarte" || document.getElementById('txtMail').value == ''){
		  $('#txtMail').css('background-position', '0px -32px');
		  $('#txtMail').css('color','#000');
		  Errores = true;
	  }  
	  else{
		   $('#txtMail').css('background-position', '0px 0px');
		  $('#txtMail').css('color','#666');
	  }
	  
	  if (document.getElementById('txtMensaje').value == "Tu mensaje, pregunta lo que necesites :)" || document.getElementById('txtMensaje').value == '' || document.getElementById('txtMensaje').value.length < 5){
		  $('#txtMensaje').css('background-position', '0px -133px');
		  $('#txtMensaje').css('color','#000');
		  Errores = true;
	  }
	  else{
		  $('#txtMensaje').css('background-position', '0px 0px');
		  $('#txtMensaje').css('color','#666');
	  }
	  //Validar el formato y que no eeste vacio de correo electronico
	  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  var Errores = false;
	  	  if (!(emailReg.test(document.getElementById('txtMail').value))){
			   $('#txtMail').css('background-position', '0px -32px');
			   $('#txtMail').css('color','#000');
			   Errores = true;
		  }
		  else{
			  $('#txtMail').css('background-position', '0px 0px');
			  $('#txtMail').css('color','#666');
		  }	    
      if (Errores){
		  return false;
	  }
	  else{
		  return true;
	  }	     
});
