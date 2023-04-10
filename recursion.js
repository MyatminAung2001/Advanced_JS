/**
 * recursion is a method of solving a problem where the solution depends
 * on solutions to smaller instances of the same problem
 * 
 * in programming, recursion occurs when a function calls itself
 * 
 * any iterator function can be recursive instead
 */

// iterator function
const countToFive = () => {
    for(let i = 0; i <= 5; i++) {
        console.log(i);
    }
};

// countToFive();

/**
 * recursive function has 2 parts
 * 
 * (1) recursive call to the function
 * 
 * (2) at least one condition to exit
 */

// recursive function
const recurToTive = (num) => {
    if (num > 10) {
        return null;
    }
    
    console.log(num++);
    recurToTive(num);
};

recurToTive(1);

// Without recursion
const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    };
    return array;
};

console.log("fibon", fibonacci(12));

// With recursion
const recurFibon = (num, array = [0, 1]) => {
    if (num <= 2) {
        return array;
    };

    const [nextToLast, last] = array.slice(-2);
    return recurFibon(num - 1, [...array, nextToLast + last]);
};

console.log("fibon", recurFibon(12));