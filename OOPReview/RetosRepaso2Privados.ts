// Reto 1: Clase Mobile

export class Mobile {
    private name : string;
    private model : string;
    private trademark : string;
    private sdSize : string;
    private color : string;
    private is5G : string;
    private cameraNumber : number;
    private price : number;
    constructor (name? : string, model? : string, trademark? : string, sdSize? : string, color? : string, is5G? : string, cameraNumber? : number, price? : number) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    getName() : string {
        return this.name;
    }
    getModel() : string {
        return this.model;
    }
    getTrademark() : string {
        return this.trademark;
    }
    getSdSize() : string {
        return this.sdSize;
    }
    getColor() : string {
        return this.color;
    }
    getIs5G() : string {
        return this.is5G;
    }
    getCamNum() : number {
        return this.cameraNumber;
    }
    getPrice() : number {
        return this.price;
    }
    setName( newName : string) {
        this.name = newName;
    }
    setModel( newModel : string) {
        this.model = newModel;
    }
    setTrademark( newTradeM : string) {
        this.trademark = newTradeM;
    }
    setSdSize( newSdSize : string) {
        this.sdSize = newSdSize;
    }
    setColor( newColor : string) {
        this.color = newColor;
    }
    setIs5G( new5G : string) {
        this.is5G = new5G;
    }
    setCamNum( newCamNum : number) {
        this.cameraNumber = newCamNum;
    }
    setPrice( newPrice : number) {
        this.price = newPrice;
    }
    getPrint() {
        console.log ("The characteristics of the mobile " + this.getName() + " are: \nName: " + this.getName() + "\nModel: " + this.getModel() + "\nTrademark: " + this.getTrademark() + "\nSD Size: " + this.getSdSize() + "\nColor: " + this.getColor() + "\nIs 5G?: " + this.getIs5G() + "\nNumber of Cameras: " + this.getCamNum());
    }

}