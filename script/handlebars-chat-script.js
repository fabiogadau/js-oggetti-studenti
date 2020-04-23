/*
* Riprodurre la piccola chat fatta insieme durante la lezione utilizzando Handlerbars.
*/

$(document).ready(function() {

  //Referenze
  var chat = $('.chat');
  var chatInput = $('.chat-input');
  var chatBtn = $('.chat-btn');

  // Inizializzo Handlebars
  var source = $('#message-template').html();
  var template = Handlebars.compile(source);

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