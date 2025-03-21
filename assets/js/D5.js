/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firsPet = pets.shift();
pets.push(firsPet);
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (i = 0; i < cars.length; i++) {
  let car = cars[i];
  car.licensePlate = "WWTTH";
  console.log(cars);
}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const car = cars[0];
const newObject = Object.assign({}, car, {
  brand: "Porsche",
  model: "Macan",
  color: "gold",
  trims: ["carbon,A++ edition"],
  licensePlate: "EG99H",
});
cars.push(newObject);
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (i = 0; i < cars.length; i++) {
  let firstTrim = cars[i].trims[0];
  justTrims.push(firstTrim);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (i = 0; i < cars.length; i++) {
  let auto = cars[i];
  if (auto.color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let counter = 0;
number = numericArray[counter];
while (numericArray[counter] !== 32) {
  console.log(number);
  counter++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alfabeto = "abcdefghiilmnopqrstuvz".split("");
let lettera = "";
for (let j = 0; j < alfabeto.length; j++) {
  lettera = alfabeto[j];
}
const posArray = [];

for (let i = 0; i < charactersArray; i++) {
  const carattere = charactersArray[i];
  switch (carattere) {
    case "a":
      posArray.push(1);
      break;
    case "b":
      posArray.push(2);
      break;
    case "c":
      posArray.push(3);
      break;
    case "d":
      posArray.push(4);
      break;
    case "e":
      posArray.push(5);
      break;
    case "f":
      posArray.push(6);
      break;
    case "g":
      posArray.push(7);
      break;
    case "h":
      posArray.push(8);
      break;
    case "i":
      posArray.push(9);
      break;
    case "l":
      posArray.push(10);
      break;
    case "m":
      posArray.push(11);
      break;
    case "n":
      posArray.push(12);
      break;
    case "o":
      posArray.push(13);
      break;
    case "p":
      posArray.push(14);
      break;
    case "q":
      posArray.push(15);
      break;
    case "r":
      posArray.push(16);
      break;
    case "s":
      posArray.push(17);
      break;
    case "t":
      posArray.push(18);
      break;
    case "u":
      posArray.push(19);
      break;
    case "v":
      posArray.push(20);
      break;
    case "z":
      posArray.push(21);
      break;
    default:
      console.log("la lettere inserita non è valida");
      break;
  }
}

console.log(posArray);
