
function checkAge() {
    let age = document.getElementById("age").value;
    if (age >= 18) {
        document.getElementById("resAge").innerHTML = "Ja. Du kannst Shisha rauchen";
    } else {
        document.getElementById("resAge").innerHTML = "Du darfst noch nicht Shisha rauchen"
    }
}

function grosSpiel() {
    let ageJohn = 22
    let grossJohn = 170 
    let ageMeike = 34
    let grossMeike = 168
    let punkteJohn = ageJohn * 5 + grossJohn
    let punkteMeike = ageMeike * 5 + grossMeike
    if (punkteJohn > punkteMeike) {
        document.getElementById("resSpiel").innerHTML = "John ist gewinnen"
    } else if (punkteMeike > punkteJohn) {
        document.getElementById("resSpiel").innerHTML = "Meike ist gewinnen"
    } else {
        document.getElementById("resSpiel").innerHTML = "Unentschieden"
    }
}

grosSpiel()

function differenz() {
    let differenz = document.getElementById("differenz").value
    let resultDiff = (differenz % 27) * 2
    if (differenz >= 27) {
        document.getElementById("resDifferenz").innerHTML = resultDiff            
    } else {
        document.getElementById("resDifferenz").innerHTML = "Error"
    } 
}

function summary() {
    let zahl1 = 5
    let zahl2 = 5 
    if (zahl1 != zahl2) {
        console.log(zahl1 * zahl2)
    } else if (zahl1 == zahl2) {
        console.log(zahl1 * zahl2 * 5)
    } 
}

summary()