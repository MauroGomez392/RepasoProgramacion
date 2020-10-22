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