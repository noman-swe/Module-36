const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
// const third = first;

/*
if(first == second){
    console.log('Objects are equal');
}
else{
    console.log('Objects are diffrent');
} //this shows not equal or diffrent.
*/

const stringifyFirst = JSON.stringify(first);
const stringifySecond = JSON.stringify(second);
if (stringifyFirst == stringifySecond) {
    // console.log('equal');
} else {
    console.log('Not =');
} //--> the result is equal; but jodi object element er position change hoy or 2 ta object er element moddhy ektar element position change kora hoy tahole abr ei stringify kaaj korbe na;

// 
const third = { a: '1', b: 2 };
const fourth = { b: 2, a: 1 };
function objectCompare(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    else{
        for(const property in obj1){
            // console.log(property);
            if(obj1[property] !== obj2[property]){
                return false;
            }
            return true;
        }
        // return true;
    }
}
const compare = objectCompare(third, fourth);
console.log(compare);