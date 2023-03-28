let form = document.getElementById("form");
let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");

function validaForm(number) {
  return number > secondNumber.value;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validaForm(firstNumber.value)) {
    alert("O primeiro numero precisa ser maior");
  } else {
    alert("correto");
  }
});
