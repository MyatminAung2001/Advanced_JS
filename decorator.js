/**
 * Decorators wrap a function in another function
 * 
 * These wrappers decorate the original function with new capabilities
 */

// Example 1
let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
};

const counter = (fn) => {
    let count = 0;

    return (...args) => {
        console.log(`sum has been called ${count += 1} times`);
        return fn(...args);
    }
};

sum = counter(sum);

console.log(sum(1, 2, 3));
console.log(sum(4, 5));
console.log(sum(5, 6, 7, 8));

// Example 2
let rectangleArea = (length, height) => {
    return length * height;
};

const countParams = (fn) => {
    return (...params) => {
        if (params.length !== fn.length) {
            throw new Error('Incorrect number of parameters')
        };
        return fn(...params);
    }
};

const requireIntegers = (fn) => {
    return (...params) => {
        params.forEach(param => {
            if (!Number.isInteger(param)) {
                throw new TypeError('Params must be integers')
            }
        });
        return fn(...params);
    }
};

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);

console.log("area", rectangleArea(4, 8));