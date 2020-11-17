// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var risultato = [];
for (var i = 1; i <= 100; i++) {

  if (i % 5 == 0 && i % 3 == 0) {
    console.log('buzzfizz');
  } else if (i % 5 == 0) {
    console.log('buzz');
  } else if (i % 3 == 0) {
    console.log('fizz');
  } else {
    console.log(i);
  }

}
