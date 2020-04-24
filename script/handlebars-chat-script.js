/*
* Riprodurre la piccola chat fatta insieme durante la lezione utilizzando Handlerbars.
Estendere la chat fatta con handlebars inserendo i messaggi iniziali, visibili al caricamento della pagina, generati da un array di oggetti.
Gli oggetti conterranno proprietà come testo e orario
Usiamo Handlebars per la generazione anche di questi messaggi.
*/

$(document).ready(function() {

  //Referenze
  var chat = $('.chat');
  var chatInput = $('.chat-input');
  var chatBtn = $('.chat-btn');

  
  // Inizializzo Handlebars
  var source = $('#message-template').html();
  var template = Handlebars.compile(source);

  
  // Creo un array con gli oggetti che saranno i messaggi
  var defaultMessages = [

    {
      messageText: 'Ciao',
      messageTime: getActualTime(),
      class: 'sent'
    },
    {
      messageText: 'Come stai?',
      messageTime: getActualTime(),
      class: 'received'
    },
    {
      messageText: 'Tutto a posto',
      messageTime: getActualTime(),
      class: 'sent'
    }

  ];

  
  // Con un ciclo for genero i messaggi
  for ( var i = 0; i < defaultMessages.length; i++ ) {

    var actualMessage = defaultMessages[i];

    var object = {
      text : actualMessage.messageText,
      time: actualMessage.messageTime,
      messageClass: actualMessage.class
    }

    var messageOutput = template(object);

    chat.append(messageOutput);

  };

  
  // Al click del bottone viene inviato il messaggio
  chatBtn.click(function() {

    // Valore digitato nell'input
    var messageInput = chatInput.val().trim();

    // Oggetto che contiene i dati del messaggio
    var message = {

      //Testo del messaggio
      text: messageInput,
      
      // Orario di invio messaggio
      time: getActualTime(),

      // Classe messaggi inviati per assegnargli il layout corrispondente
      messageClass: 'sent'
  
    };

    
    // Creo una variabile alla quale assegno la funzione template() alla quale assegno a sua volta l'oggetto newMessage
    var newMessage = template(message);

    
    // Appendo nel main .register i dati ottenuti
    chat.append(newMessage);

    chatInput.val('');

    chat.scrollTop( chat.innerHeight() );

    
    // Risposta automatica dopo 1 secondo
    setTimeout(function() {

      // Oggetto che contiene i dati del messaggio
      var message = {

        //Testo del messaggio
        text: 'ok',
        
        // Orario di invio messaggio
        time: getActualTime(),
  
        // Classe messaggi ricevuti per assegnargli il layout corrispondente
        messageClass: 'received'
    
      };

      // Creo una variabile alla quale assegno la funzione template() alla quale assegno a sua volta l'oggetto newMessage
      var newMessage = template(message);

      // Appendo nel main .register i dati ottenuti
      chat.append(newMessage);

      chat.scrollTop( chat.innerHeight() );

    }, 2000);

  });


  /*******************************
  FUNZIONI
  ********************************/
  // Funzione per ottenere ora attuale
  function getActualTime(){

    var time = new Date();
    var hour = addZero( time.getHours() );
    var minutes = addZero( time.getMinutes() );
    var actualTime = ( hour + ':' + minutes );

    return actualTime;

  };

  
  // Funzione per aggiungere uno 0 prima dei numeri inferiori a 10
  function addZero(number){

    if (number < 10) {
      number = '0' + number;
    }

    return number;

  };













}); // End ready document