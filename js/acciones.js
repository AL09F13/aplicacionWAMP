// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnlista').on('tap', function(){
		$.ajax({
			type: "POST",
			url: "http://192.168.1.177/Practica03/buscarjuegos.php",
			error: function(){
				alert ("no me puedo conectar al  servidor de jegos");
			},
			success: function(respuesta){
				   '<div id="imagen" style="display: inline-block"> <img src="" width="175" height="111"> </div> <div id="datos" style="display: inline-block"> <div> <p>Titulo</p></div> <div><p>Fecha</p></div> <div><p>Compañia</p></div> <div><p>Plataforma</p></div> <div><p>Genero</p></div> <div><p>Clasificacion</p></div></div>'
			}
			
			
			
		});
	});
});
});
