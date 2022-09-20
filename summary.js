// objext creation types but mostly usagable :- 
const pen = {
    brand: 'Matador',
    price: 10,
    writePoem: function (food) {
        console.log(food);
    }
}

// getting the object property
const keys = Object.keys(pen); //- object er sob property gula k niye ektaa array banaye output dibe;
const values = Object.values(pen); //- object er sob property er value gula k niye ektaa array banaye output dibe;

// object er sob property gulak loop
for (const key in pen) {
    console.log(pen[key]);
}

// bind finction 
const aBOunded = pen.writePoem.bind(a);
aBOunded();
// caller

// this
//array function er nijessho kono this hoy na but normal function e hoy