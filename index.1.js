const sayHello = name => `Olá ${name}`;
const printHello = nome => {
  console.log(`Hello ${nome}`);
};
const getSiblings = n => ({ previus: n-1, next: n+1 });

console.log(getSiblings(10));
printHello('Leo');
console.log(sayHello('Leo'));


