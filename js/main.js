//PARTE LÓGICA
//funcion constructor de chat individualmente
function Chat(_nombre, _imagen)
{
	this.nombre =  _nombre;
	this.imagenURL = _imagen;
	this.ultimoMensaje = "";
	this.horaUltimoMensaje = '';

	this.borrarMensajes = function()
	{

	};
}

//Instancia los chats en arreglo
var infoListChats = [
	new Chat("Lichy", 'image/lichy.jpg'),
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


//PARTE VISUAL
//variable global
var liListItem = null;

//Inicializa la página web
function init() {

	initChatList();
}

//Crea e inicia toda la lista chats
function initChatList() 
{
	//Obtén contenedor ul de los chats
	var listChatsLi = document.getElementById("list-chats");

	for (var i in infoListChats) {
		var htmlChatItem = '<li><div class="avatar">' +
			'<img src="' + infoListChats[i].imagenURL +  '" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">' + infoListChats[i].nombre + '</h4>' +
			'<p class="w-last-message" id="mensaje">' + infoListChats[i].ultimoMensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">' + infoListChats[i].horaUltimoMensaje + '</div></li>';
		infoListChats[i].borrarMensajes();
		listChatsLi.innerHTML += htmlChatItem;
	}

	eventsSetChatList();
}

//Actualiza los eventos de los chats
function eventsSetChatList() {
	var listadoChats = document.getElementById('list-chats');
	var arrayListItems = listadoChats.getElementsByTagName('li');

	for (var i = 0; i < arrayListItems.length; i++) {
		/*arrayListItems[i].onclick = function(){
		 alert("Click!");
		 };*/
		arrayListItems[i].addEventListener('click', clickOnChatItem);
	}
}

function clickOnChatItem(evt) {
	//event.currentTarget: Siempre se refiere al elemento del event Handler (Manejador de Eventos) que ha sido atachado a un event.target especifico, 
	//este identifica el elemento en el que se produjo el evento.  Devuelve el elemento del DOM que está disparando el evento actualmente
	var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent; //acesso al contenido del h4, nombre del perfil
	var imgURL = evt.currentTarget.getElementsByClassName('wh-44')[0].src;//acesso al avatar
	console.log('click');
	headerChatDinamic(contactName, imgURL, "Conectado");
}

//Manda mensajes cada vez uqe presiones la tecla enten
function onMensajeKey(evt) {
	if (evt.keyCode == 13) {
		var inputMessages = document.getElementById("mensajes");

		createChat(inputMessages.value);
		createMessage(inputMessages.value);

		inputMessages.value = "";
	}
}

//Crea un mensaje
function createMessage(_mensaje) {

	//mensajes que recibes
	var htmlMensajeIn = '<div class="w-message w-message-in">' +
		'<div class="w-message-text">' +
		'<h5 class="green-1">Maria Paula Rivarola</h5>' +
		'<p>Jajaja Sii finalmente se corto!!</p>' +
		'<div class="time">11:13</div>' +
		'</div>' +
		'</div>';

	var d = new Date();

	//mensajes que envias
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


	var elChat = document.getElementById("chat"); //agrega los mensajes al arreglo
	elChat.innerHTML += htmlMensajeOut;
	elChat.scrollTop = elChat.scrollHeight;
}

//Crea chats
function createChat(_mensaje) {
	var listChatsLi = document.getElementById("list-chats");

	if (liListItem == null) {
		liListItem = document.createElement('LI');
		var htmlChatItem = '<div class="avatar">' +
			'<img src="image/logocodeacademy.png" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">Laboratoria Perú</h4>' +
			'<p class="w-last-message" id="mensaje">' + _mensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">14:27</div>';

		liListItem.innerHTML = htmlChatItem;

		listChatsLi.insertBefore(liListItem, listChatsLi.childNodes[0]);
	}
	eventsSetChatList(); //Actualiza los eventos de la lista de chats
	//listChatsLi.innerHTML += htmlChatItem;
}

//Recibe como parametro la infomarcion dl perfil de chat y actualiza la cabecera
function headerChatDinamic(_contactName, _imageURL, _estado) {
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML = _contactName;
	chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML = _estado;
	chatHeader.getElementsByTagName('img')[0].src = _imageURL;
}


//Busca en la lista de contactos algun chat
var search = document.getElementById("search"),
    food = document.getElementsByClassName("avatar"),
    forEach = Array.prototype.forEach;

	search.addEventListener("keyup", function(e)
	{
	    var choice = this.value;
	  
	    forEach.call(food, function(f){
	        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
	            f.parentNode.style.display = "none";        
	        else
	            f.parentNode.style.display = "block";        
    });
}, false)