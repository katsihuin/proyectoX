//Logica



//Parte Visual
function onMensajeKey(evt)
{
	if(evt.keycode == 13)
	{
		var elInputMensajes = document.getElementById("mensajes");
		crearMensaje(elInputMensajes.value);
		elInputMensajes.value = "";
	}
}
function crearMensaje(_mensaje)
{
	var htmlMessageIn = '<div class="w-message w-message-in">' 
	+ '<div class="w-message-text">' 
	+ '<h5 class="green-1">Maria Paula Rivarola</h5>'
	+ '<p>Jajaja Sii finalmente se corto!!</p>'
	+ '<div class="time">11:13</div>'
	+ '</div>'
	+ '</div>';
	  								
	  								
	  								
	  		
	var htmlMessageOut = '<div class="w-message w-message-out">'
					+  	'<div class="w-message-text">'		
	  				+ '<p>' +_mensaje + '</p>'
  					+'<div class="time">11:14</div>'				
	  				+ '</div>'
					+ '</div>';

	var elemConversacion = document.getElementById('conversacion');
	elemConversacion.innerHTML += htmlMessageOut;

}
function crearListaChats()
{
	
}
function actualizarCabeceraChat()
{
	
}