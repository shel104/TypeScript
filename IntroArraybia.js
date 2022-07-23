let customersArray = [
    "Custy Stomer",
    "C. Oostomar",
    "C.U.S. Tomer",
    3432434,
    "Custo Mer",
    "Custopher Ustomer",
    3432435,
    "Kasti Yastimeur",
];
//Write Your Code here:
function checkCustomersArray() {
    for (let i = 0; i < customersArray.length; i++) {
        if (typeof customersArray[i] != "string") {
            console.log(`Type error: ${customersArray[i]}
         should be a string!`);
        }
    }
}
checkCustomersArray();
function stringPush(val) {
    if (typeof val === "string") {
        customersArray.push(val);
    }
}
