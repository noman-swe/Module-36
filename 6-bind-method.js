const kibria = {
    id: 101,
    name: 'Kibria',
    money: 5000,
    
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

// 
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

kibria.treatDey(100);
const heroTreatDay = kibria.treatDey.bind(heroBalam);
heroTreatDay(500);
heroTreatDay(300);
heroTreatDay(200);
heroTreatDay(100);
kibria.treatDey(300);
kibria.treatDey(500);
kibria.treatDey(50);


/* 
const rjKibria = kibria.treatDey(500);
console.log(rjKibria); 
*/


//object function calling form another object or using the object function calculations in another object.