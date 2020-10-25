import {Punto} from "./Punto";
import {Triangulo} from "./triangulo";

let puntito : Punto = new Punto ( 50, 35 );
let puntito2 : Punto = new Punto ( 20, 20);
console.log( puntito.getDistancia( puntito2));
let puntito3 : Punto = new Punto (5, 10);
let puntito4 : Punto = new Punto (50, 10);
console.log( puntito.getDistancia( puntito3));
console.log( puntito.getDistancia( puntito4));
let allPuntos : Punto [] = [ puntito2, puntito3, puntito4];
console.log( puntito.getCalcularMasCercano(allPuntos));


let tri : Triangulo = new Triangulo (puntito, puntito2, puntito3);
console.log( tri.calcularLongitudLados());