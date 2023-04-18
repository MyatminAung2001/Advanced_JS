// Mutable vs Immutable

// Primitives are immutable
let name = 'Alex';
name[0] = 'B' // nope
console.log(name);

name = 'Rand'; // reassignment is not the same as mutable
console.log(name);

/**
 * Pure functions require you to avoid mutating the data
 */

// Impure function that mutates that data
const addToScoreHistory = (array, score) => {
    array.push(score);
    return array;
};

// This mutates the original array and is considered to be a side-effect.
const scoredArray = [12, 34, 45];
console.log(addToScoreHistory(scoredArray, 56));

// Value vs Reference

// Primitive pass values
let x = 2;
let y = 2;
y += 1;
console.log(y);
console.log(x);

// Structual types use references
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(yArray);
console.log(xArray);

// Shallow Copy vs Deep Copy

// Shallow Copy
const zArray = [...yArray, 18]
console.log("zArray", zArray);

console.log(yArray === xArray);

// With Object.assign
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray); // false
tArray.push(11);
console.log(zArray);
console.log(tArray);

// But if there are nested arrays or objects
yArray.push([5, 6, 7]);
const vArray = [...yArray];
console.log("vArray", vArray);
vArray[4].push(4);
console.log(vArray);
console.log("yArray", yArray);
// nested structural data types still share a reference
// Array.from () and slice() create shallow copies

// With Objects
const scoreObj = {
    "first": 40,
    "second": 50,
    "third": {
        a: 60,
        b: 70
    }
};

Object.freeze(scoreObj);
scoreObj.third.a = 80;
console.log(scoreObj); // still mutates - it is a shallow copy

/**
 * Deep copy is needed to avoid this
 * 
 * But it doesn't work with Datas, functions, Undefined, Inifinity, RegExps, Maps, Sets, Blobs,
 * FileLists, ImageDatas and other complex data types
 */

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(newScoreObj === scoreObj);

const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj;

    // Create an array or object to hold the values
    const newObject = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];
        // recursive called for nested objects & arrays
        newObject[key] = deepClone(value);
    };

    return newObject
};

const newScoreArray = deepClone(scoredArray);
console.log(newScoreArray);
console.log(newScoreArray === scoredArray);

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
console.log(myScoreObj === scoreObj);