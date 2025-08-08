// sorry its my first  project with js so if i had done any mistake pls tell me...

function add() {
    let a = parseFloat(document.getElementById("in1").value);
    let b = parseFloat(document.getElementById("in2").value);
    document.getElementById("result").innerText = "Result: " + (a + b);
}

function subtract() {
    let a = parseFloat(document.getElementById("in1").value);
    let b = parseFloat(document.getElementById("in2").value);
    document.getElementById("result").innerText = "Result: " + (a - b);
}

function multiply() {
    let a = parseFloat(document.getElementById("in1").value);
    let b = parseFloat(document.getElementById("in2").value);
    document.getElementById("result").innerText = "Result: " + (a * b);
}

function divide() {
    let a = parseFloat(document.getElementById("in1").value);
    let b = parseFloat(document.getElementById("in2").value);

    if (b = 0) {
        document.getElementById("result").innerText = "Error: Cannot divide by 0";
    } else {
        document.getElementById("result").innerText = "Result: " + (a / b);
    }
}