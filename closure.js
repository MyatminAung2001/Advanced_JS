/**
 * Lexical scope defines how variable names are resolved nested functions
 * 
 * Nested (child) functions have to access to the scope of their parent functions
 * 
 * Often confused with closure, but lexical scope is only an important part of closure
 * 
 * A closure is a function having access to the parent scope even after the parent function has closed
 */

// global scope
let x = 1;

const parentFunction = () => {
    // local scope 
    let y = 2;
    console.log(x);
    console.log(y);

    const childFunction = () => {
        console.log(x += 5);
        console.log((y += 5));
    };

    return childFunction;
};

// const result = parentFunction();
// console.log(result); // get anonymous function

// result();
// result();
// result();

// console.log("X value", x);
// console.log(y); // reference error, private variable

// IIFE (Immediately Invoked Function Expression)
const privateCounter = (() => {
    let count = 0;
    console.log(`Initial value ${count}`);

    return () => {
        count += 1;
        console.log(count);
    }
})();

// privateCounter();
// privateCounter();
// privateCounter();

const credits = ((num) => {
    let credits = num;
    console.log(`Initial value ${credits}`);
    
    return () => {
        credits -= 1;
        if (credits > 0) {
            console.log(`Playing game, ${credits} credit remaining`);
        } else {
            console.log('Not enough credits');
        }
    }
})(3);

credits();
credits();
credits();