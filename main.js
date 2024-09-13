const calculater = document.getElementById("calculater");
const outputSpan = document.getElementById("outputSpan");
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");

let result = 0;
let a, b;

function updateResult() {
    a = parseFloat(aInput.value);
    b = parseFloat(bInput.value);

    //complicated processing here
    result = a + b;

    outputSpan.innerHTML = result;
    return 0;
}

aInput.oninput = updateResult;
bInput.oninput = updateResult;