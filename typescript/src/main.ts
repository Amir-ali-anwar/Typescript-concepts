function sum(message: string, ...numbers: number[]) {
  const doubled = numbers.map((num) => num * 2)
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current
  })
  return `${message}${total}`

}

// let result = sum(`The total is : `, 1, 2, 3, 4)
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
// processInput(10);
// processInput('Hello');




//Your task is to create a function named processData that accepts two parameters:

//The first parameter, input, should be a union type that can be either a string or a number.
//The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
//The function should behave as follows:

//If input is of type number, the function should return the square of the number.
//If input is of type string, the function should return the string in uppercase.
//If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

const processData = (input: string | number, config: { reverse: boolean } = { reverse: false }): string | Number => {
  if(typeof input ==='number'){
    return input * input;
  }else{
    return config.reverse
    ? input.toUpperCase().split('').reverse().join('')
    : input.toUpperCase();
  }

}
console.log(processData(10)); 
console.log(processData('Amir Ali Anwar')); 