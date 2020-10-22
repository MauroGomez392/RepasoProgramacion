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
        this.totalPrice;
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
    setName( newName : string ) {
        this.name = newName;
    }
    setLocation( newLocation : string ) {
        this.location = newLocation;
    }
    setMobiles( newMobile : Mobile [] ) {
        this.mobiles = newMobile;
    }
    getTotalPriceCalculation() : number {
        let totalPrice : number = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            totalPrice += this.mobiles[i].getPrice();
        }
        return totalPrice;
    }
}
