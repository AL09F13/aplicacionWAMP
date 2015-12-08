// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnlista').on('tap', function(){
		$.ajax({
			type: "POST",
			url: "http://192.168.1.177/Practica03/buscarjuegos.php",
			error: function(){
			alert ("no me puedo conectar al  servidor de jegos");},
			
			success: function(respuesta){ var producto = JSON.parse(respuesta);
			$('#contenido').empty();
			for(var $x=0; $x < producto.peliculas.length;$x++)
			{$('#contenido').append('<div id="imagen" style="display: inline-block"> <img src="" width="175" height="111"> </div> <div id="datos" style="display: inline-block"> <div> <h2>Titulo:</h2> <p>'+ producto.juegos[$x].titulo +'</p></div> <div><h2>Fecha:</h2> <p>'+ producto.juegos[$x].fecha +'</p></div> <div><h2>Compañia:</h2> <p>'+ producto.juegos[$x].compania +'</p></div> <div><h2>Plataformas:</h2><p>'+ producto.juegos[$x].plataformas +'</p></div><div><h2>Genero:</h2<p>'+ producto.juegos[$x].genero +'</p>></div> <div><h2>Clasificación:</h2><p>'+ producto.juegos[$x].clasificacion +'</p></div></div>')
				   
			}
			
			}
			
		});
	});
});
});
