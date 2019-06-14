//creating data for the calculator
const calculator = {
    display: '0',
    first: "",
    second: "",
    operator: null,
}
function Digit(digit) {
    const { display, second } = calculator;

    if (second === true) {
      calculator.display = digit;
      calculator.second = false;
    } else {
      calculator.display = display === '0' ? digit : display + digit;
    }
  
    console.log(calculator);
  }
  function Decimal(dot){
    if (calculator.second === true) return;
    if (!calculator.display.includes(dot)) {
        // Append the decimal point
        calculator.display += dot;
    }
  }
  function handle(next){
    const { first, display, operator } = calculator
    const inputValue = parseFloat(display);
    if (operator && calculator.second)  {
        calculator.operator = next;
        console.log(calculator);
        return;
      }
    if (first === "") {
        calculator.first = inputValue;
      }else if (operator) {
        const currentValue = first || 0;
        const result = Calculation[operator](currentValue, inputValue);
    
        calculator.display = String(result);
        calculator.first = result;
      }
      calculator.second = true;
       calculator.operator = next;
      calculator.operator = next;
  }
  const Calculation = {
 '/': (first, second) => first / second,
 '*': (first, second) => first * second,
 '+': (first, second) => first + second,
 '-': (first, second) => first - second,

  }
  function reset() {
    calculator.display = '0';
    calculator.first = "";
    calculator.second = false;
    calculator.operator = "";
    console.log(calculator);
  }
  function show(){
      const view = document.querySelector('.calculator-screen')
        view.innerHTML = calculator.display;
  }
  show();

  const keys = document.querySelector('.calculator-keys')
  keys.addEventListener('click', (event) =>{
      //this line is called an array destructuring
      const {target} = event
      if (!target.matches('button')){
          return
      }
      if (target.classList.contains('operator')){
        handle(target.value);
        show();
        console.log(calculator);
         return;
      }
      if (target.classList.contains('decimal')){
        Decimal(target.value);
        // handleOperator(target.value);
            show();
         return;
      }
      if (target.classList.contains('all-clear')){
        reset();
        show();
         return;
      }
      console.log(target.value)
      Digit(target.value);
      show()
  })
