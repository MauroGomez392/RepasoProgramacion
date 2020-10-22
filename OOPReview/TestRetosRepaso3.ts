import {Mobile} from "./RetosRepaso2Privados"
import {MobileLibrary} from "./ficheroRetosRepaso3"
let nokia3210 : Mobile = new Mobile ("Nokia3210", "3210", "Nokia", "32 Gb", "gris", "no", 0, 65);
let iphone3G : Mobile = new Mobile ("Iphone3G", "3G", "Apple", "32 Gb", "black", "no", 1, 115 );
let galaxy10 : Mobile = new Mobile ("Samsung Galaxy 10", "Galaxy 10", "Samsung", "128 Gb", "black", "si", 5, 530);
let iphone12 : Mobile = new Mobile ("Iphone 12", "12", "Apple", "128 GB", "negro", "si", 3, 959);
let mobileLibrary : MobileLibrary = new MobileLibrary ("Primeros móviles", "Barcelona", [nokia3210, iphone3G, galaxy10, iphone12]);
console.log( mobileLibrary.getTotalPriceCalculation());
console.log( mobileLibrary.getName());
console.log( mobileLibrary.getLocation());
console.log( mobileLibrary.getMobiles());
mobileLibrary.setName( "Looney Toons");
mobileLibrary.setLocation( "Madrid");
mobileLibrary.setMobiles( [nokia3210, iphone3G, galaxy10, iphone12]);
console.log( mobileLibrary.getName());
console.log( mobileLibrary.getLocation());
console.log( mobileLibrary.getMobiles());