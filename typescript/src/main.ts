function sum(message: string, ...numbers: number[]) {
  const doubled = numbers.map((num) => num * 2)
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current
  })
  return `${message}${total}`

}

let result = sum(`The total is : `, 1, 2, 3, 4)
// console.log(result);


//Task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

// If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// If the input is of type string, the function should convert the string to uppercase and log the result to the console.

const processInput = (input: string | number) => {
  if (typeof input === 'number') {
    console.log(input * 2);

  } else {
    console.log(input.toLocaleLowerCase());

  }
}
processInput(10);
processInput('Hello');

