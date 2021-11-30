// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

let nomi = 
[
    "angelo",
    "marco",
    "antonio",
    "francesco",
    "pino",
    "simone",
    "tommaso",
    "elio"
];

let cognomi = 
[
    "amenta",
    "trovato",
    "fidone",
    "galfo",
    "pintus",
    "pavone",
    "britti",
    "provolone"
]

const container = document.querySelector(".container");
const div = document.createElement("div");
container.append(div);
const title = `<h1>Lista invitati</h1>`;
div.innerHTML = title;

for (let i = 0; i < nomi.length; i++) {
    const randomElement = nomi[Math.floor(Math.random() * nomi.length)];
    // console.log(randomElement);
    const randomElement2 = cognomi[Math.floor(Math.random() * cognomi.length)];
    // console.log(randomElement2); 

    let nomeCognome = `${randomElement} ${randomElement2}`;
    console.log(nomeCognome);
    div.innerHTML += `<h3>${nomeCognome}</h3>`;
}
