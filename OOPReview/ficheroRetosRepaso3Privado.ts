import {Mobile} from "./RetosRepaso2Privados";
export class MobileLibrary {
    private name : string;
    private location : string;
    private mobiles : Mobile [];
    private totalPrice : number;
    constructor (name? : string, location? : string, mobiles? : Mobile []) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.getTotalPriceCalculation();
    }
    getName() : string {
        return this.name;
    }
    getLocation() : string {
        return this.location;
    }
    getMobiles() : Mobile [] {
        return this.mobiles;
    }
    getTotalPrice() : number {
        return this.totalPrice;
    }
    setName( newName : string ) {
        this.name = newName;
    }
    setLocation( newLocation : string ) {
        this.location = newLocation;
    }
    setMobiles( newMobile : Mobile [] ) {
        this.mobiles = newMobile;
    }
    private getTotalPriceCalculation() : number {
        let totalPrice : number = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            totalPrice += this.mobiles[i].getPrice();
        }
        return totalPrice;
    }
    getPrintLibrary() {
        let mensaje : string = "";
        let mensajeIni : string = "This are all my mobiles:\n";
        for (let i = 0; i < this.mobiles.length; i++) {
           mensaje += this.mobiles[i].getPrint() + "\n";
        }
        return mensajeIni + mensaje + "Price Overall: " + this.getTotalPrice();
        //console.log( mensaje);
    }
}
let nokia3210 : Mobile = new Mobile ("Nokia3210", "3210", "Nokia", "32 Gb", "gris", "no", 0, 65);
let iphone3G : Mobile = new Mobile ("Iphone3G", "3G", "Apple", "32 Gb", "black", "no", 1, 115 );
let galaxy10 : Mobile = new Mobile ("Samsung Galaxy 10", "Galaxy 10", "Samsung", "128 Gb", "black", "si", 5, 530);
let iphone12 : Mobile = new Mobile ("Iphone 12", "12", "Apple", "128 GB", "negro", "si", 3, 959);
let mobileLibrary : MobileLibrary = new MobileLibrary ("Primeros móviles", "Barcelona", [nokia3210, iphone3G, galaxy10, iphone12]);
/*
console.log( mobileLibrary.getName());
console.log( mobileLibrary.getLocation());
console.log( mobileLibrary.getMobiles());
mobileLibrary.setName( "Looney Toons");
mobileLibrary.setLocation( "Madrid");
mobileLibrary.setMobiles( [nokia3210, iphone3G, galaxy10, iphone12]);
console.log( mobileLibrary.getName());
console.log( mobileLibrary.getLocation());
console.log( mobileLibrary.getMobiles());
*/
console.log( mobileLibrary.getPrintLibrary());