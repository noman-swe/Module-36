const student = {name: 'sakib', job: 'Cricketer'};

// 2
const  person = new Object();
// console.log(person);

// 3.
const human = Object.create(student);
console.log(human.name);

// class object - sentictical sugar
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const info = new People('shibly', 25);
console.log(info);

// function object
function manush(name){
    this.name = name;
}
const man = new manush('Shibly');
console.log(man);