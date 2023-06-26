
let inputarea = document.getElementById('inputarea')


function display(value){
    inputarea.value += value;
}

function calculate(){
    let value = inputarea.value;
    let result = eval(value)
    inputarea.value = result;
 
}

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})


function deleteCharacter() {
  inputarea.value = inputarea.value.slice(0, -1);
}


const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', deleteCharacter);
