const friends = ['tom Hanks', 'tom Cruise', 'tom John', 'tom Solaiman'];

const friendsLength = friends.map( friend => friend.length);
// const friendsNames = friends.map(name => console.log(name));

// console.log(friendsLength);
// console.log(friendsNames);

/* ---------------------------
-----------------------------------
*/
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 25000, color: 'white' },
    { name: 'smart watch', price: 5000, color: 'black'},
    { name: 'stiky note', price: 500, color: 'off-white'},
    { name: 'water glass', price: 20, color: 'red'},
];

const allNames = products.map(product => product.name);
const allPrice = products.map(product => product.price / 5);
console.log(allNames);
console.log(allPrice);

//forEach(){} 
const allColor = products.forEach(element => {
    console.log(element);
});
// console.log(allColor);

// filter - find
const heightPrice = products.filter(product => product.price > 4000);
const coloredProduct = products.find(product => product.color = 'yellow');

console.log(heightPrice);
console.log(coloredProduct); 