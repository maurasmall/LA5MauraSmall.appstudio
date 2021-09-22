function calculate (num1, num2) {
  summedNumbers = num1+ num2
  return summedNumbers
  }

let num1 = Number(prompt(`Insert a number`))
let num2 = Number(prompt(`Insert another number`))

let answer = calculate(num1, num2)
console.log(`The sum of ${num1} and ${num2} is ${answer}`)