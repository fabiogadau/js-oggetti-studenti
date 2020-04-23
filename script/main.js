/* 
* OGGETTI
Creare un oggetto che descriva uno studente.
Lo studente avrà  le seguenti proprietà: nome, cognome e età.
Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
*/

$(document).ready(function() {

  var student = {
    
    name: 'Fabio',
    surname: 'Gadau',
    age: 27

  };

  for ( var informations in student ) {

    console.log( informations + ': ' + student[informations] );

  };




















});