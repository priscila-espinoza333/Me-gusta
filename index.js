var counterVal = 0;

function incrementClick() {
    counterVal++;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    var counterLabel = document.querySelector("#counter-label");
    if (counterLabel) {
        counterLabel.textContent = val;
    }
}

// Parte 2

var counterVal1 = 9;
var counterVal2 = 12;
var counterVal3 = 9;

function incrementClick1() {
    counterVal1++;
    updateDisplay("counter-label1", counterVal1);
}

function incrementClick2() {
    counterVal2++;
    updateDisplay("counter-label2", counterVal2);
    
}

function incrementClick3() {
    counterVal3++;
    updateDisplay("counter-label3", counterVal3);
}

function updateDisplay(elementId, val){
    var counterLabel = document.getElementById(elementId);
    if(counterLabel){
        counterLabel.textContent = val;
    }
}

