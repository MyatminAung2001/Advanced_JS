/**
 * Currying takes a function that receives more than one parameter and breaks it into
 * a series of unary (one parameter) function
 * 
 * A curried function only takes one parameter at a time return a new function 
 * that expects the next argument. 
 */

const makeBurger = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`
        }
    }
};

const myBurger = makeBurger("Bacon")("Cheese")("Bread");

console.log(myBurger);

// Let refactor:
const refactorBurger = ingredient1 => ingredient2 => ingredient3 => {
    return `${ingredient1} ${ingredient2} ${ingredient3}`;
};

console.log(refactorBurger("Bacon")("Cheese")("Bread"));

// Another example
const mulitply = (x, y) => {
    return x * y;
};

const curriedMultiply = x => y => x * y;

console.log(curriedMultiply(2)(2));

/**
 * Another common use of currying is function composition
 * Allows calling small functions in a specific order
 */

const addCustomer = fn => (...args) => {
    console.log('Saving customer info...');
    return fn(...args);
};

const processOrder = fn => (...args) => {
    console.log(`Processing order #${args[0]}...`);
    return fn(...args);
};

let completeOrder = (...args) => {
    console.log(`Order ${[...args].toString()} completed.`);
};

completeOrder = addCustomer(completeOrder);
completeOrder = processOrder(completeOrder)("1000");
completeOrder();