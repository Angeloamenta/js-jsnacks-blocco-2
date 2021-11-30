// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let numbers = 
[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
];

const container = document.querySelector(".container");
const div = document.createElement("div");
container.append(div);
const title = `<h1>Ecco il risultato della somma di tutti gli elementi in posizione dispari</h1>`;
div.innerHTML = title;


let = somma = 0;

for (let i = 0; i < numbers.length; i+=2) {
    const element = parseInt(numbers[i]);
    console.log(element); 
    somma += element;
    div.innerHTML+= `<h1>${element}</h1>`
}

console.log(somma);

div.innerHTML += `<h1> totale ${somma}</h1>`