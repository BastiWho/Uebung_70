// Aufgabe 2.1
let x = 5;
let y = 7;
let sum = x+y;
console.log(sum);

/*
Aufgabe 2.2
Let     = Eine Variable, deren wert sich verändern lässt.
const   = Ist eine Konstante, welche einen nicht änderbaren Wert hat.

Weitere Unterschiede: 
Const   = Kann nicht erneut deklariert oder neu zugewiesen werden

let     = Wert lässt sich während der Laufzeit ändern.

Beide haben ein Blockscope und ist nur in dem Block / Funktion verfügbar, in dem sie deklariert wurden.
*/

//Aufgabe 2.3
const favlanguage = ["Javascript", "Ruby", "C#", "Pyhthon", "Typescript"];

for (let i = 0; i < favlanguage.length; i++) {
    console.log(favlanguage[i]);
}

//Aufgabe 2.4

function greet(name){
    console.log("Hallo", name);
}

greet("Basti")

//Aufgabe 2.5
