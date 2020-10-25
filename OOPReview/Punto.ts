export class Punto {
    private x : number;
    private y : number;
    constructor (x? : number, y? : number) {
        this.x = x;
        this.y = y;
    }
    getX() : number {
        return this.x;
    }
    getY() : number {
        return this.y;
    }
    setX( newX : number) {
        this.x = newX;
    }
    setY( newY : number) {
        this.y = newY;
    }
    getToStrig() : string {
        let toString : string = "";
        return toString = "(" + this.x + "," + this.y + ")";
    }
    getDistanciaAlOrigen() : number {
        let distancia : number;
        return distancia = Math.sqrt( Math.pow( this.x - 0, 2) + Math.pow( this.y - 0, 2) );
    }
    getDistancia( punto : Punto ) : number {
        let distancia : number;
        return distancia = Math.sqrt( Math.pow( punto.getX() - this.x, 2) + Math.pow( punto.getY() - this.y, 2) );
    }
    getCalcularCuadrante() : number {
        let respuesta : number ;

        if (this.x == 0 || this.y == 0){
            return respuesta = 0;
        } else if (this.x > 0 && this.y > 0) {
            return respuesta = 1;
        } else if (this.x < 0 && this.y > 0) {
            return respuesta = 2;
        }else if (this.x < 0 && this.y < 0) {
            return respuesta = 3;
        }else if (this.x > 0 && this.y < 0) {
            return respuesta = 4;
        }
    }
    getCalcularMasCercano( puntitos : Punto [] ) : Punto {
        if (puntitos.length == 0){
            return null;
        }
        let distanciaMasCorta: number = this.getDistancia( puntitos[0]);
        let indiceDelmasCorto : number = 0;
        for (let i = 1; i < puntitos.length; i++){
            let distanciaAlIndice : number = this.getDistancia(puntitos[i]);
            if ( distanciaAlIndice < distanciaMasCorta) {
                distanciaMasCorta = distanciaAlIndice;
                indiceDelmasCorto = i;
            }
        }
        return puntitos[indiceDelmasCorto];      
    }
}
