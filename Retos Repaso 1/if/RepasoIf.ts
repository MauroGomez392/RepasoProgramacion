export function findYourSigno (d : number, m : number) : string{
    let signo : string = "";
    if ((d > 19 && m < 2) || (d < 19 && m == 2)){
        return signo = "Tu signo es Acuario.";
    }
    else if ((d > 18 && m == 2) || (d < 21 && m == 3)){
        return signo = "Tu signo es Piscis.";
    }
    else if ((d > 20 && m == 3) || (d < 20 && m == 4)){
        return signo = "Tu signo es Aries";
    }
    else if ((d > 19 && m == 4) || (d < 22 && m == 5)){
        return signo = "Tu signo es Tauro";
    }
    else if ((d > 20 && m == 5) || (d < 21 && m == 6)){
        return signo = "Tu signo es Géminis";
    }
    else if ((d > 20 && m == 6) || (d < 23 && m == 7)){
        return signo = "Tu signo es Cáncer";
    }
    else if ((d > 22 && m == 7) || (d < 23 && m == 8)){
        return signo = "Tu signo es Leo.";
    }
    else if ((d > 22 && m == 8) || (d < 23 && m == 9)){
        return signo = "Tu signo es Virgo.";
    }
    else if ((d > 22 && m == 9) || (d < 23 && m == 10)){
        return signo = "Tu signo es Libra.";
    }
    else if ((d > 22 && m == 10) || (d < 22 && m == 11)){
        return signo = "Tu signo es Escorpio.";
    }
    else if ((d > 21 && m == 11) || (d < 22 && m == 12)){
        return signo = "Tu signo es Sagitario.";
    }
    else if ((d > 21 && m == 12) || (d < 20 && m == 1)){
        return signo = "Tu signo es Capricornio.";
    }
    else {
        return signo = "O no hemos entendido tu fecha de nacimiento o no eres de por aquí... Intenta escribiendo el día sin ceros ¨0¨ ";
    }

}
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
export function numPar (myArray : number []) : String{
    // let myArray : number [] = myArray1;
     let mensaje : String = "";
     let i = 0; 
     let encontroPar : Boolean = false;
     while (i < myArray.length && !encontroPar){
         let num : number; 
         num = myArray[i];
         if (num % 2 == 0){
             mensaje = "Sí, hay numero par y es el " + num + " ";
             encontroPar = true;
             i++;
         }
         else if (num % 2 != 0){
             encontroPar = false;
             i++;
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
export function esParOImpar( n : number ) : string {
    let mensaje : string = "";
    if (n % 2 == 0) {
        mensaje = "El número es Par";
    } else if (n % 2 == 1) {
         mensaje = "El número es Impar";
    }
    return mensaje;
 }
