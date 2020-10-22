function nombresConM (nombres : string []) : Boolean {
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
console.log (nombresConM (["Batman", "Mauro", "Mariano", "Martin", "Miguel", "Moria", "Matman"]));
