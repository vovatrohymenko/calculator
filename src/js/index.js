const firstFild = document.querySelector("#firstNumber");
const secondFild = document.querySelector("#secondNumber");
const actionSelect = document.querySelector("#action");
const equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
  const firstFild = parseFloat(firstFild.value);
  const secondFild = parseFloat(secondFild.value);
  const action = actionSelect.value;
  let result;
  switch (action) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        alert("На нуль ділити не можна");
        return;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      alert("Операція на вірна");
  }
  alert("Результат:" + result);
});
