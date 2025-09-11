
let displayInput = document.getElementById("display");

function appendValue(value){
    // console.log(JSON.stringify(displayInputValue));
    displayInput.value += value;
    }
function clearDisplay() {
    displayInput.value = "";
}

function  deleteLast() {
    displayInput.value = displayInput.value.slice(0, -1);
}
function calculator() {
    try{
        displayInput.value = eval(displayInput.value);
    } catch {
        displayInput.value = "Error";
    }
}

displayInput.addEventListener("input", () => {
    if(!Number(displayInput.value)){
        displayInput.value = displayInput.value.slice(0, -1);
    }
})  

