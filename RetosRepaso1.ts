// Reto 1: Fecha de nacimiento (día, mes, año) = signo zodíaco
/*
Acuario (20/01 - 18/02)
Piscis (19/02- 20/03)
Aries (21/03 - 19/04)
Tauro (20/04 - 21/05)
Géminis (21/05 - 20/06)
Cáncer (21/06 - 22/07)
Leo (23/07 - 22/08)
Virgo (23/08 - 22/09)
Libra (23/09 - 22/10)
Escorpio (23/10 - 21/11)
Sagitario (22/11 - 21/12)
Capricornio (22/12 - 19/01)
 */
function findYourSigno (d : number, m : number) : string{
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
// console.log (findYourSigno (35, 14));

// Reto 2: País y Continentes

function findYourContinent (pais : string) : string{
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
// console.log (findYourContinent ("Indonesia"));

// Reto 3: Números Impares
function impares (n : number) : string{
    let maxNumber : number = n;
    let numImpares : string = "";
    for (let i = 1; i < maxNumber; i+=2){
        numImpares += i + " "; 
    }
    return numImpares;
}
// console.log (impares (190));

// Reto 4: Array inverso
function backArray (myArray1 : Number []) : Number []{
    let myArray : Number [] = myArray1;
    let newArray : Number [] = [];
    for (let i = (myArray.length - 1); i > -1; i--){
        let element : Number = myArray[i];
        //myArray.shift();
        newArray.push(element);
    }
    return newArray;
}
// console.log (backArray ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Reto 5: Arcoiris : rojo, naranja, amarillo, verde, azul, añil y violeta
function arcoiris (colores1 : String []) : String{
    let colores : String [] = colores1;
    let mensaje : String = "";
    for (let i = 0; i < colores.length; i++){
        if (colores[i] == "rojo" || colores[i] == "naranja" || colores[i] == "amarillo" || colores[i] == "verde" || colores[i] == "azul" || colores[i] == "añil" || colores[i] == "violeta"){
            mensaje += colores[i] + " se encuentra en el Arcoiris :) ";
        }
    }
    return mensaje;
}
// console.log (arcoiris (["rojo", "azul", "amarillo", "negro", "blanco", "fuccia", "verde"]));

// Reto 6: Numero par en el array?
function numPar (myArray : number []) : String{
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
// console.log (numPar ([1, 3, 5, 7, 10, 9,]));

// Reto 7: Nombres con M?
function nombresConM( nombres : string [] ) : Boolean {
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
// let result = nombres.filter (nombres => nombres[i][0] === "M");
// console.log (nombresConM (["Mauro", "Mariano", "Martin", "Miguel", "Moria", "Matman"]));

// Reto 8: Suma de caracteres en Array:
function sumaDeArray( suArray : string [] ) : number {
    let enNum : number;
    enNum = 0;
    for (let i = 0; i < suArray.length; i++) {
        enNum += suArray[i].length;
    }
    return enNum;
}
// console.log( sumaDeArray( ["Mauro", "Mariano", "Martin", "Miguel", "Moria", "Matman"] ) );

// Reto 9: Es par? o impra?
function esParOImpar( n : number ) : string {
   let mensaje : string = "";
   if (n % 2 == 0) {
       mensaje = "El número es Par";
   } else if (n % 2 == 1) {
        mensaje = "El número es Impar";
   }
   return mensaje;
}
// console.log( esParOImpar( 45 ) );

// Reto 10, suma de Arrays
console.log( esParOImpar( sumaDeArray( ["Casa", "Coche", "Ciudad", "Cesta"]) ) );
console.log( esParOImpar( sumaDeArray( ["Barco", "Baca", "Bicicleta", "Balón", "Bisiesto", "Brasil"]) ) );
console.log( esParOImpar( sumaDeArray( ["Venezuela", "Veneno", "Voltaje"]) ) );

