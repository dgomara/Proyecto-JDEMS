function cargar(){
	var urlWeb = document.getElementById("url").value;
	var ide = document.getElementById("identificador").value;
	var url="php/extraer.php"
	var parametros = {
		"url" : urlWeb,
		"ide" : ide
	};
	$.ajax({   
		data:  parametros,
		type: "POST",
		url:url,
		data:  parametros,
		success: function(datos){       
			$('#contenido').html(datos);
		}
	});
}