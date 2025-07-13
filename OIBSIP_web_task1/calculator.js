let character = document.getElementById("result");


function addNumber(number) {
  character.value += number;
}


function addOperator(operator) {
  const opChar = character.value.slice(-1);
  if ("+-*/".includes(opChar)) {
    character.value = character.value.slice(0, -1) + operator;
  } else {
    character.value += operator;
  }
}


function clearresult() {
  character.value = "";
}


function backspace() {
  character.value = character.value.slice(0, -1);
}


function output() {
  try {
    character.value = eval(character.value);
  } catch (e) {
    character.value = "ERROR";
  }
}


function squareroot() {
  try {
    if (character.value !== "") {
      const result = Math.sqrt(eval(character.value));
      character.value = result;
    }
  } catch (e) {
    character.value = "Error";
  }
}