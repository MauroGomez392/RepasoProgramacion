import {Punto} from "./Punto";

export class Triangulo {
    private vertice1 : Punto;
    private vertice2 : Punto;
    private vertice3 : Punto;
    constructor( ver1? : Punto , ver2?: Punto , ver3? : Punto ) {
        this.vertice1 = ver1;
        this.vertice2 = ver2;
        this.vertice3 = ver3;
    }
    calcularLongitudLados() : number [] {
        let longitud : number [] = [];
        longitud.push(this.vertice1.getDistancia(this.vertice2), this.vertice2.getDistancia(this.vertice3), this.vertice3.getDistancia(this.vertice1));
        return longitud;
    }
}
let puntito1 : Punto = new Punto (19, 5);
let puntito2 : Punto = new Punto (15, 20);
let puntito3 : Punto = new Punto (30, 25);
let tri : Triangulo = new Triangulo (puntito1, puntito2, puntito3);
console.log( tri.calcularLongitudLados());