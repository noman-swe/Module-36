const bottle = { color: 'yellow', held: 'water', price: 50, isCleaned: true };

// getting the all properties name
const keys = Object.keys(bottle);
// console.log(keys);


// get all values from a object
const values = Object.values(bottle);
// console.log(values);

// 
const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;

// 
bottle.price = 100;

console.log(bottle);

{
    pairs.forEach(element => {
        // console.log(element);
        element.forEach(ele => {
            // console.log(ele);
        })
    });
}

/* 
Object.seal(objectName); seal korle sei object er kisu delete kora habe na and new property add koraw jabe na but existing property er modification kora jabe..
Object.freeze(objectName); eita te sob freeze e hoye thake so modification o possible hoy na
*/