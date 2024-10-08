function sum(message: string, ...numbers: number[]) {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  });
  return `${message}${total}`;
}

// let result = sum(`The total is : `, 1, 2, 3, 4)
// console.log(result);

//Task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

// If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// If the input is of type string, the function should convert the string to uppercase and log the result to the console.

const processInput = (input: string | number) => {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLocaleLowerCase());
  }
};
// processInput(10);
// processInput('Hello');

//Your task is to create a function named processData that accepts two parameters:

//The first parameter, input, should be a union type that can be either a string or a number.
//The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
//The function should behave as follows:

//If input is of type number, the function should return the square of the number.
//If input is of type string, the function should return the string in uppercase.
//If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

const processData = (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | Number => {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
};
console.log(processData(10));
// console.log(processData('Amir Ali Anwar'));

//Type Predicate in TypeScript

// In Typescript, a "Type predicate" is a concept used to define a custom type guard function. Type Guards are function that return a boolean and are used to
// narrow down the type of a variable within the conditional block.

const isString = (value: string): value is string => {
  return typeof value === "string";
};

const toCheckIsString = (value: string) => {
  let isValidString = ""; // Initialize as an empty string
  if (isString(value)) {
    // Use type predicate isString to check if the value is a string
    isValidString += "Entered Value is String";
  } else {
    isValidString += "Entered Value is not String";
  }
  return isValidString;
};

console.log(toCheckIsString("amir ali anwar"));
// console.log(toCheckIsString(123));

// Output: 'Entered Value is String'

//

interface Car {
  type: "car";
  make: string;
  model: string;
  maxSpeed: number;
}
interface Bike {
  type: "bike";
  brand: String;
  model: string;
  maxSpeed: number;
}

type Vehicle = Car | Bike;

const isCar = (vehicle: Vehicle): vehicle is Car => {
  return (vehicle as Car).type === "car";
};

const calculateMaxSpeed = (vehicle: Vehicle): number => {
  if (isCar(vehicle)) {
    return vehicle.maxSpeed;
  } else {
    return vehicle.maxSpeed * 0.8;
  }
};
const myCar: Car = {
  type: "car",
  make: "Toyota",
  model: "Camry",
  maxSpeed: 200,
};
const myBike: Bike = {
  type: "bike",
  brand: "Honda",
  model: "CBR",
  maxSpeed: 180,
};

console.log(calculateMaxSpeed(myCar)); // Output: 200
console.log(calculateMaxSpeed(myBike)); // Output: 144 (180 * 0.8)

// Type Predicate example #2

interface Cat {
  name: string;
  meow: () => void;
}
interface Dog {
  name: string;
  bark: () => void;
}
const isCat = (animal: Cat | Dog): animal is Cat => {
  return "meow" in animal;
};
const greet = (animal: Cat | Dog) => {
  if (isCat(animal)) {
    console.log(`Hello, ${animal.name}!`);
    animal.meow();
  } else {
    console.log(`Hi, ${animal.name}!`);
    animal.bark();
  }
};
const fluffy = { name: "Fluffy", meow: () => console.log("Meow!") } as Cat;
const buddy = { name: "Buddy", bark: () => console.log("Woof!") } as Dog;
greet(fluffy); // Output: Hello, Fluffy! Meow!
greet(buddy);
// Mapped Types in typescript

// Mapped types in TypeScript allow you to create new types by transforming properties of an existing type.

//readonly

interface Person {
  name: string;
  age: number;
}
type ReadonlyOnlyPerson = Readonly<Person>;

//Conditional types

//Conditional types in TypeScript allow you to create types that depend on other types.
//They are particularly useful when you want to conditionally select one of two types based on a type constraint.
//Conditional types use the extends keyword to define constraints and employ the ternary conditional operator (? :) to select types based on these constraints.

type NonNullAble<T> = T extends null | undefined ? never : T;

// Mapping Union Types:

// Example #1
type StringOrNumber<T> = T extends string ? string : number;

type Results = StringOrNumber<string | number | boolean>;

// Example # 2

interface Dog {
  type: "dog";
  breed: string;
}
interface Cat {
  type: "cat";
  color: string;
}

type AnimalType<T> = T extends { type: infer Type } ? Type : never;

type AnimalTypes = AnimalType<Dog | Cat>;

// Discriminated unions
// Discriminated unions, also known as tagged unions or algebraic data types, are a powerful feature in TypeScript that allows you to work with values that could take one of several distinct forms.
// They are particularly useful when dealing with complex data structures or modeling different states or types.

interface Square {
  kind: "square"; // Discriminant property
  size: number;
}

interface Rectangle {
  kind: "rectangle"; // Discriminant property
  width: number;
  height: number;
}
interface Circle {
  kind: "circle"; // Discriminant property
  radius: number;
}
type Shapes = Square | Rectangle | Circle;

const calculateArea = (shape: Shapes): number => {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;

    case "circle":
      return Math.PI * shape.radius ** 2;
  }
};
const square: Square = { kind: "square", size: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 4, height: 6 };
const circle: Circle = { kind: "circle", radius: 3 };

console.log(calculateArea(square)); // Output: 25
console.log(calculateArea(rectangle)); // Output: 24
console.log(calculateArea(circle));

// Intersection Types
// In TypeScript, an intersection type (TypeA & TypeB) is a way of combining multiple types into one.
//This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB.
// It's a way of creating a new type that merges the properties of existing types.
type Book = {
  id: number;
  name: string;
  price: number;
};
type DiscountBook = Book & {
  discount: number;
};
const book1: Book = {
  id: 1,
  name: "How to Cook a Dragon",
  price: 15,
};
const book2: Book = {
  id: 3,
  name: "The Secret Life of Unicorns",
  price: 18,
};

const discountedBook: DiscountBook = {
  id: 4,
  name: "Gnomes vs. Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};

//Type Alias - Computed Properties

// Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects.
// This is done by wrapping an expression in square brackets [] that computes the property name when creating an object.

const personAge = 40;

type animal = {
  [personAge]: number;
};
let tiger: animal = { [personAge]: 5 };

// Conditional type:

type Check<T> = T extends string ? string : number;

function processCheckdata<T>(value: T): Check<T> {
  if (typeof value === "string") {
    return value as Check<T>;
  } else {
    return value as Check<T>;
  }
}
const data: string | number = processCheckdata("hello"); // data is string

console.log({data}); // Output: string

// Enums

// Enums in TypeScript allow us to define a set of named constants.
// Using enums can make it easier to document intent, or create a set of distinct cases.
enum ServerResponseStatus {
  Success = 200,
  Error = "Error",
}
interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function serverResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first Item", "second Item"],
  };
}
const response: ServerResponse = serverResponse();
console.log(response);

// Type Assertion

//Using the as keyword:
let someValue: any = "This is a string";
let stringLength = (someValue as string).length;
console.log(stringLength);
type Bird = {
  name: string;
};
type DogType = {
  breed: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as DogType;
console.log(bird.name);
console.log(dog.breed);

// Angle-bracket syntax:

let someDataValue: any = "this the string";
let strlength: number = (<string>someDataValue).length;
console.log(stringLength);

// Type assertion with interfaces:

interface Foo {
  bar: number;
  baz: string;
}

let foo: Foo = {
  bar: 123,
  baz: "yahoo.com",
};

let foodAsserted = foo as Foo;
console.log(foodAsserted.bar); // Output: 123
console.log(foodAsserted.baz);

// Type assertion with function return types:

function parseString(str: string | undefined): string {
  // We assert str is not undefined
  return str as string;
}

let parsedString = parseString("hello");
console.log(parsedString.toUpperCase()); // Output: "HELLO"

// Type assertion with type unions and type guards:
interface Fish {
  swim(): void;
}
interface Birds {
  fly(): void;
}

function CalculateMove(animal: Fish | Birds) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    (animal as Birds).fly();
  }
}

const fish: Fish = {
  swim() {
    console.log("Swimming");
  },
};
CalculateMove(fish);

// Type - 'unknown'

//The unknown type in TypeScript is a type-safe counterpart of the any type.
//It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.4

let unknownValue: unknown;
unknownValue = "Hello World"; // OK
unknownValue = [1, 2, 3]; // OK
unknownValue = 42.3344556; // OK

if (typeof unknownValue === "number") {
  console.log("Type of unknownValue is number", unknownValue.toFixed(2));
}

//Type assertion from unknown to a specific type:

let userInput: unknown = "hello";
let inputLength: number = (userInput as string).length;
console.log(inputLength);

// Using type guards with unknown:
function isStringValue(value: unknown): value is string {
  return typeof value === "string";
}
function processIsStringValue(value: unknown) {
  if (isStringValue(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log("Value is not a string.");
  }
}
// processIsStringValue("hello"); // Output: HELLO
// processIsStringValue(123); // Output: Value is not a string.

// classes

class Books {
  public readonly title: string;
  public author: string;
  private checkOut = false;
  constructor(title: string, author: string) {
    (this.title = title), (this.author = author);
  }
  public checkout() {
    this.checkOut = this.toggleCheckOutStatus();
  }
  public isCheckOut() {
    return this.checkOut;
  }
  public toggleCheckOutStatus() {
    return !this.checkOut;
  }
}
const newBooks = new Books("deep work", "Cal Newport");

newBooks.checkout();
// console.log(newBooks.isCheckOut());
interface Iperson {
  name: string;
  age: number;
  greet(): void;
}
class Person implements Iperson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}
const hispter = new Person("Amir Ali Anwar", 26);

hispter.greet();

// Using type guards with unknown:

function isStringvalue(value: unknown): value is string {
  return typeof value === "string";
}
function processValue(value: unknown) {
  if (isStringvalue(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log("Value is not a string.");
  }
}
console.log(processValue("arewr"));

// 1. Generic Functions

function Identity<T>(arg: T): T {
  return arg;
}
let output1 = Identity<string>("Hello, TypeScript!"); // Output type is string
console.log(output1);

// Merging Objects with Generics

//A function that merges two objects into one, with type safety.

function mergeObject<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = { name: "Alice" };
const details = { age: 25, city: "Wonderland" };

const mergeObjects = mergeObject(person, details);
console.log(mergeObjects);

// Creating a Generic Wrapper for API Responses

interface ApiResponse<T> {
  data: T | null;
  error: Error | string | null;
}
async function fetchDataAPI<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error: (error as Error).message };
  }
}

async function getTodoData() {
  const result = await fetchDataAPI<any>(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  if (result.error) {
    console.error("Error fetching data:", result.error);
  } else {
    console.log("Todo Data:", result.data);
  }
}

getTodoData();

// Dynamic Generics with Conditional Types

// type ResponseType<T> = T extends string ? { value: string } : { value: number };

// function processResponse<T>(input: T): ResponseType<T> {
//     if (typeof input === 'string') {
//         return { value: input } as ResponseType<T>;
//     } else {
//         return { value: Number(input) } as ResponseType<T>;
//     }
// }

// const stringResponse = processResponse('Hello'); // { value: string }
// const numberResponse = processResponse(42); // { value: number }

// console.log(stringResponse, numberResponse);


//Using Union Types with Generics

function handleInput<T extends string | number>(input: T): string {
  if (typeof input === 'string') {
      return `String input: ${input}`;
  } else {
      return `Number input: ${input}`;
  }
}

console.log(handleInput('Hello')); // "String input: Hello"
console.log(handleInput(42)); // "Number input: 42"

// Generic Functions with Multiple Types

function Combine<T, U>(first: T, second: U): [T, U] {
  return [first,second]
}

let combined= Combine('Hy this the combine function',123)
console.log({combined});

