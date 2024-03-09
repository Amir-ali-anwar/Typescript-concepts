function sum(message: string, ...numbers: number[]) {
  const doubled = numbers.map((num) => num * 2)
  console.log(doubled);
  
  let total= numbers.reduce((previous,current)=>{
      return previous + current
  })
  return `${message}${total}`

}

let result = sum(`The total is : `, 1, 2, 3, 4)
console.log(result);
