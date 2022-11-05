alert('Hello');
alert('This is my calculator on JavaScript!');

let currentValue = "0"; 
let savedValue = "0"; 
let signMinus = false; 
let currentOperation = null; 
let resetOnNumberPressed = false; 
 
let highlightId = null; 
 
function display() { 
    document.getElementById("display").innerHTML = signMinus ? "-" + currentValue : currentValue;
}
 
function numPressed(num) { 
    if (resetOnNumberPressed) { 
        reset();
        resetOnNumberPressed = false;
    }
 
    if (currentValue == "0")
        currentValue = String(num);
    else
        currentValue += num;
    display();
}
 
function reset() { 
    currentValue = "0";
    savedValue = "0";
    signMinus = false;
    resetHighlight();
    display();
}
 
function signChange() { 
    if (currentValue == "0") 
        return;
 
    signMinus = !signMinus; 
    display();
}
 
function operation(op) { 
    if (currentOperation != null) 
        calculate(); 
    resetOnNumberPressed = false;
 
    
    savedValue = signMinus ? "-" + currentValue : currentValue;
    currentValue = 0;
    signMinus = false;
    currentOperation = op;
    display();
}
 
function calculate() { 
    if (currentOperation == null) 
        return;
 
    currentValue = signMinus ? "-" + currentValue : currentValue;
    currentValue = String(eval(savedValue + currentOperation + currentValue)); 
 
    currentOperation = null;
    savedValue = 0;
    signMinus = false;
    resetOnNumberPressed = true;
 
    if (currentValue[0] == '-') { 
        currentValue = currentValue.substring(1);
        signMinus = true; 
    }
 
    resetHighlight(); 
    display();
}
 
function backspace() {
    if (resetOnNumberPressed) { 
        reset();
        return;
    }
 
    if (currentValue.length === 1) { 
        currentValue = "0"; 
        signMinus = false;
    } else
        currentValue = currentValue.substring(0, currentValue.length - 1); 
    display();
}
 
function highlight(id) { 
    resetHighlight();
 
    document.getElementById(id).style.backgroundColor = "lightblue";
    highlightId = id; 
}
 
function resetHighlight() { 
    if (highlightId != null)
        document.getElementById(highlightId).style.backgroundColor = "";
}




