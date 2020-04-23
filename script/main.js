/* 
* OGGETTI
Creare un oggetto che descriva uno studente.
Lo studente avrà  le seguenti proprietà: nome, cognome e età.
Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
*/

$(document).ready(function() {

  // Inizializzo Handlebars
  var source = $('#register-template').html();
  var template = Handlebars.compile(source);

  // Creo un oggetto con i dati dello studente
  var student = {
    
    name: 'Fabio',
    surname: 'Gadau',
    age: 27

  };

  // Creo una variabile alla quale assegno la funzione template() alla quale assegno a sua volta l'oggetto student
  var newStudent = template(student);

  // Appendo nel main .register i dati ottenuti
  $('.register').append(newStudent);

  // Ciclo for in per visualizzare proprietà e valori dell'oggetto student
  for ( var informations in student ) {

    // Visualizzo in console
    console.log( informations + ': ' + student[informations] );

  };














}); // End ready document