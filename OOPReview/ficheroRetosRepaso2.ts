import {Mobile} from "./RetosRepaso2"
let nokia3210 : Mobile = new Mobile ("Nokia3210", "3210", "Nokia", "32 Gb", "gris", "no", 0, 65);
let iphone3G : Mobile = new Mobile ("Iphone3G", "3G", "Apple", "32 Gb", "black", "no", 1, 115 );
let galaxy10 : Mobile = new Mobile ("Samsung Galaxy 10", "Galaxy 10", "Samsung", "128 Gb", "black", "si", 5, 530);

console.log( nokia3210.name + " " + nokia3210.model + " " + nokia3210.trademark + " " + nokia3210.sdSize + " " + nokia3210.color + " " + nokia3210.is5G + " " + nokia3210.cameraNumber + " " + nokia3210.price);
console.log( iphone3G.name + " " + iphone3G.model + " " + iphone3G.trademark + " " + iphone3G.sdSize + " " + iphone3G.color + " " + iphone3G.is5G + " " + iphone3G.cameraNumber + " " + iphone3G.price);
console.log( galaxy10.name + " " + galaxy10.model + " " + galaxy10.trademark + " " + galaxy10.sdSize + " " + galaxy10.color + " " + galaxy10.is5G + " " + galaxy10.cameraNumber + " " + galaxy10.price);
nokia3210.is5G = "si";
nokia3210.cameraNumber = 4;
console.log( nokia3210, iphone3G, galaxy10);