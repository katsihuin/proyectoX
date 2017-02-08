//Lógica
function Chat(_nombre, _imagen)
{
	this.nombre =  _nombre;
	this.imagenURL = _imagen;
	this.ultimoMensaje = "";
	this.horaUltimoMensaje = '';

	this.borrarMensajes = function()
	{
		alert("borrado");
	};
}

var dataListaChats = [
	new Chat("Lisette Aguilar", 'image/lichy.jpg'),
	new Chat("Roxsy", 'image/roxy.jpg'),
	new Chat("Maribel", 'image/maribel.jpg'),
	new Chat("Yovana", 'image/yonana.jpg'),
	new Chat("Raiza", 'image/raiza.jpg'),
	new Chat("Maricela", 'image/maricela.jpg'),
	new Chat("Katy", 'image/katy.jpg'),
	new Chat("Raymi", 'image/raymi.jpg'),
	new Chat("Andrea", 'image/andrea.jpg'),
	new Chat("Gian", 'image/gian.jpg'),
	new Chat("AnaMaria", 'image/anamaria.jpg')
];


//Parte visual
var liListItem = null;

function init() {

	initChatList();
}

function initChatList() {
	var elListaChats = document.getElementById("lista-chats");

	for (var i in dataListaChats) {
		var htmlChatItem = '<li><div class="avatar">' +
			'<img src="' + dataListaChats[i].imagenURL +  '" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">' + dataListaChats[i].nombre + '</h4>' +
			'<p class="w-last-message" id="mensaje">' + dataListaChats[i].ultimoMensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">' + dataListaChats[i].horaUltimoMensaje + '</div></li>';
		dataListaChats[i].borrarMensajes();
		elListaChats.innerHTML += htmlChatItem;
	}

	setEventsChatList();
}

function setEventsChatList() {
	var listaChats = document.getElementById('lista-chats');
	var arrListItems = listaChats.getElementsByTagName('li');

	for (var i = 0; i < arrListItems.length; i++) {
		/*arrListItems[i].onclick = function(){
		 alert("Click!");
		 };*/
		arrListItems[i].addEventListener('click', onChatItemClick);
	}
}

function onChatItemClick(evt) {
	//console.log(evt.currentTarget);
	var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
	var imgURL = evt.currentTarget.getElementsByClassName('wh-44')[0].src;
	console.log('click');
	actualizarCabeceraChat(contactName, imgURL, "Conectado");
}

function onMensajeKey(evt) {
	if (evt.keyCode == 13) {
		var elInputMensajes = document.getElementById("mensajes");

		crearChat(elInputMensajes.value);
		crearMensaje(elInputMensajes.value);

		elInputMensajes.value = "";
	}
}

function crearMensaje(_mensaje) {
	var htmlMensajeIn = '<div class="w-message w-message-in">' +
		'<div class="w-message-text">' +
		'<h5 class="green-1">Maria Paula Rivarola</h5>' +
		'<p>Jajaja Sii finalmente se corto!!</p>' +
		'<div class="time">11:13</div>' +
		'</div>' +
		'</div>';

	var d = new Date();
	var htmlMensajeOut = '<div class="w-message w-message-out">' +
		'<div class="w-message-text">' +
		'<p>' + _mensaje + '</p>' +
		'<div class="time">' + d.getHours() + ':' + d.getMinutes();
	+'</div>' +
	'</div>' +
	'</div>';

	var mensaje = liListItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
	console.log();


	var elChat = document.getElementById("chat");
	elChat.innerHTML += htmlMensajeOut;
	elChat.scrollTop = elChat.scrollHeight;
}

function crearListaChats() {

}
function crearChat(_mensaje) {
	var elListaChats = document.getElementById("lista-chats");

	if (liListItem == null) {
		liListItem = document.createElement('LI');
		var htmlChatItem = '<div class="avatar">' +
			'<img src="image/logocodeacademy.png" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">Laboratoria Perú</h4>' +
			'<p class="w-last-message" id="mensaje">' + _mensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">14:27</div>';

		liListItem.innerHTML = htmlChatItem;

		elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);
	}
	setEventsChatList();
	//elListaChats.innerHTML += htmlChatItem;
}

function actualizarCabeceraChat(_contactName, _imageURL, _estado) {
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML = _contactName;
	chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML = _estado;
	chatHeader.getElementsByTagName('img')[0].src = _imageURL;
}