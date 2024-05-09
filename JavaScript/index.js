// BASIC JAVASCRIPT
// COUNTING PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


// SELECTION CONSTRUCT
let age = 18;
if(age >= 18){
    console.log("You are old enough to enter this site..");
} else {
    console.log("You must be 18+ to enter this site");
}

// NESTED SELECTION CONSTRUCT
function validateEx(ageNumber, hasLicense){
    if(ageNumber >= 16){
        if(!hasLicense){
            console.log("You are old enough! But do not have your license yet!");
        } else {
            console.log("You're good to go!");
        }
    } else {
        console.log("You must be 16+ to have a license..");
    }
}

// ANOTHER WAY FOR VALIDATION, BUT USING FORM

const VisAge = document.getElementById("myAge");
const submitButton = document.getElementById("submitButton");
const label = document.getElementById("resultElement");

submitButton.onclick = function(){
    const visitorAge = Number(VisAge.value);
    if(visitorAge >= 21){
        label.textContent = `You are allowed to enter the room!`;
    } else {
        label.textContent = `You are too young to enter the room!`;
    }
}
