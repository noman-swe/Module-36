const bottle = {
    color: 'yellow',
    held: 'water',
    price: 50,
    isCleaned: true
};
/* 
for(let i = 0; i < 10; i++){}
for(const num of numbers){} //array
for(const num in numbers){} //object
*/

for(const property in bottle){
    console.log(property, bottle[property]);
}

 
// 
const keys = Object.keys(bottle);

for(const property of keys){
    console.log(property, bottle[property]);
}

// advance
const entries = Object.entries(bottle);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}