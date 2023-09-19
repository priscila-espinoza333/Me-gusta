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