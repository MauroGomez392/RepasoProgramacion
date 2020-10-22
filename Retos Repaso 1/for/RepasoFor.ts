export function findYourContinent (pais : string) : string{
    let pais1 : string = pais;
    let mundi : string [][];
    let africa : string [] = ["Southafrica", "Kenia", "Egipto", "Senegal", "Angola"];
    let europa : string [] = ["España", "Francia", "Italia", "Inglaterra", "Alemania"];
    let sudAmerica : string [] = ["Uruguay", "Argentina", "Brasil", "Colombia", "Venezuela"];
    let asia : string [] = ["China", "Japón", "Rusia", "Indonesia", "India"];
    let northAmerica : string [] = ["USA", "Canada","México"];
    let centroAmerica : string [] = ["Nicaragua", "Cuba", "Honduras", "República Dominicana", "Costa Rica"];
    mundi = [africa , europa, sudAmerica, asia, northAmerica, centroAmerica];
    for (let i = 0; i < mundi.length; i++){
        for (let j = 0; j < africa.length; j++){
            let lugar : string = mundi[i][j]
            if (pais1 === lugar){
            let tuConti : string;
                if (mundi[i] == africa){
                    return tuConti = "Africa";
                }
                else if (mundi[i] == europa){
                    return tuConti = "Europa";
                }
                else if (mundi[i] == sudAmerica){
                    return tuConti = "América del Sur";
                }
                else if (mundi[i] == asia){
                    return tuConti = "Asia";
                }
                else if (mundi[i] == northAmerica){
                    return tuConti = "América del Norte";
                }
                else if (mundi[i] == centroAmerica){
                    return tuConti = "Centro América";
                }
            }
        }
    }
    

}
export function impares (n : number) : string{
    let maxNumber : number = n;
    let numImpares : string = "";
    for (let i = 1; i < maxNumber; i+=2){
        numImpares += i + " "; 
    }
    return numImpares;
}
export function backArray (myArray1 : Number []) : Number []{
    let myArray : Number [] = myArray1;
    let newArray : Number [] = [];
    for (let i = (myArray.length - 1); i > -1; i--){
        let element : Number = myArray[i];
        //myArray.shift();
        newArray.push(element);
    }
    return newArray;
}
export function arcoiris (colores1 : String []) : String{
    let colores : String [] = colores1;
    let mensaje : String = "";
    for (let i = 0; i < colores.length; i++){
        if (colores[i] == "rojo" || colores[i] == "naranja" || colores[i] == "amarillo" || colores[i] == "verde" || colores[i] == "azul" || colores[i] == "añil" || colores[i] == "violeta"){
            mensaje += colores[i] + " se encuentra en el Arcoiris :) ";
        }
    }
    return mensaje;
}
export function nombresConM( nombres : string [] ) : Boolean {
    let todosConM : Boolean = true;
    let empiezaConM : string = "";
    for (let i = 0; i < nombres.length && todosConM; i++) {
        empiezaConM = nombres[i][0];
        if (nombres[i][0] === "M") {
            todosConM = true;
        } else {
            todosConM = false;
        } 
    }
    return todosConM;
}
export function sumaDeArray( suArray : string [] ) : number {
    let enNum : number;
    enNum = 0;
    for (let i = 0; i < suArray.length; i++) {
        enNum += suArray[i].length;
    }
    return enNum;
}