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
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }

}
console.log(processData(10));
// console.log(processData('Amir Ali Anwar')); 


//Type Predicate in TypeScript

// In Typescript, a "Type predicate" is a concept used to define a custom type guard function. Type Guards are function that return a boolean and are used to 
// narrow down the type of a variable within the conditional block.

const isString = (value: string): value is string => {
  return typeof value === 'string';
}

const toCheckIsString = (value: string) => {
  let isValidString = ''; // Initialize as an empty string
  if (isString(value)) { // Use type predicate isString to check if the value is a string
    isValidString += 'Entered Value is String';
  } else {
    isValidString += 'Entered Value is not String';
  }
  return isValidString;
}

console.log(toCheckIsString('amir ali anwar'));
// console.log(toCheckIsString(123));

// Output: 'Entered Value is String'


//

interface Car {
  type: 'car',
  make: string,
  model: string,
  maxSpeed: number
}
interface Bike {
  type: 'bike',
  brand: String,
  model: string,
  maxSpeed: number
}


type Vehicle = Car | Bike

const isCar = (vehicle: Vehicle): vehicle is Car => {
  return (vehicle as Car).type === 'car'
}

const calculateMaxSpeed = (vehicle: Vehicle): number => {
  if (isCar(vehicle)) {
    return vehicle.maxSpeed;
  } else {
    return vehicle.maxSpeed * 0.8
  }
}
const myCar: Car = { type: 'car', make: 'Toyota', model: 'Camry', maxSpeed: 200 }
const myBike: Bike = { type: 'bike', brand: 'Honda', model: 'CBR', maxSpeed: 180 };

console.log(calculateMaxSpeed(myCar)); // Output: 200
console.log(calculateMaxSpeed(myBike)); // Output: 144 (180 * 0.8)


// Mapped Types in typescript

// Mapped types in TypeScript allow you to create new types by transforming properties of an existing type.

//readonly 

interface Person {
  name: string;
  age: number;
}
type ReadonlyOnlyPerson = Readonly<Person>

//Conditional types

//Conditional types in TypeScript allow you to create types that depend on other types.
//They are particularly useful when you want to conditionally select one of two types based on a type constraint. 
//Conditional types use the extends keyword to define constraints and employ the ternary conditional operator (? :) to select types based on these constraints.

type NonNullAble<T> = T extends null | undefined ? never : T

// Mapping Union Types:

// Example #1
type StringOrNumber<T> = T extends string ? string : number

type Results = StringOrNumber<string | number | boolean>

// Example # 2

interface Dog {
  type: 'dog',
  breed: string
}
interface Cat {
  type: 'cat';
  color: string;
}

type AnimalType<T> = T extends { type: infer Type } ? Type : never

type AnimalTypes = AnimalType<Dog | Cat>