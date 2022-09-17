const student = {
    id: 101,
    name: 'Shibly',
    money: 5000,
    major: 'Mathmatics',
    subjects: ['english', 'ecomomics', 'math 101', 'calculas'],  
    bestFriend: {
        name: 'Kundu',
        major: 'Mathmetics'
    },
    takeExam: function(){
        console.log( 'hey!', this.name, `Today is your ${this.major} exam day.`);
    },

    treatDey: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}

student.takeExam();
const remainingMoney = student.treatDey(200);
const remainingMoney2 = student.treatDey(300);
console.log(remainingMoney2);