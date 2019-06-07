const calculator = document.querySelector('.calculator')
const keys = calculator.querySelectorAll('.key--operator')
const display = document.querySelector('.calculator__display')
const previousKeyType = calculator.dataset.previousKeyType


keys.forEach (function (el) {
    el.addEventListener('click', e => {
    console.log(e.target.innerText)
        if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
           
            if (!action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
                } else {
                display.textContent = displayedNum + keyContent
                }
            }
            if (action === 'decimal') {
                // ...
                calculator.dataset.previousKey = 'decimal'
              }
              
              if (action === 'clear') {
                // ...
                calculator.dataset.previousKeyType = 'clear'
              }
              
              if (action === 'calculate') {
                if (action === 'calculate') {
                    const calculate = (n1, operator, n2) => {
                        let result = '' 
                        if (operator === 'add') {
                            result = parseFloat(n1) + parseFloat(n2)
                        } else if (operator === 'subtract') {
                            result = parseFloat(n1) - parseFloat(n2)
                        } else if (operator === 'multiply') {
                            result = parseFloat(n1) * parseFloat(n2)
                        } else if (operator === 'divide') {
                            result = parseFloat(n1) / parseFloat(n2)
                        }
      
                        return result
                    }
                    calculator.dataset.previousKeyType = 'calculate'
                  }
            }
        }
       
    })
})
