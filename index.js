// const person="abhishek raj\nrauniyar bad bad bad";
// console.log(person.at(6));
// console.log(person.charAt(5));
// console.log(person.concat(" i am coder").concat(' from sarlahi'));
// console.log("shyam".concat('-Dev').concat('-Jee'));
// console.log(person.toUpperCase());
// console.log(person.toLowerCase());
// console.log(person.endsWith('a'));
// console.log(person.includes('ni'));
// console.log(person.indexOf('i'));
// console.log(person.isWellFormed());
// console.log(person.isWellFormed());
// console.log(person.length);
// console.log(person.padStart());
// console.log(person.repeat(4));
// console.log(person.replace('bad','good'));
// console.log(person.replaceAll('bad','good'));
// console.log(person.replaceAll('bad','good'));
// console.log(person.slice(0,3));
// console.log(person.substring(1,5));
// console.log(person.split('a'));

// const personName="ram";
// const age=92;
// const job='dev';
// // template literals
// console.log(`he is good ${personName} ${age} ${job}`);
// console.log(`he is good ${personName} ${age} ${job}`);
// console.log("abishek\"".length);
/*console.log("abishek\"".toUpperCase());
console.log("abishek\"".toLowerCase());*/

// let str = "plese give Rs 1000";
// console.log(str.match)
/*const text = "plese give me rs 1000";

const match = text.match(/\d+/);
const amount = match ? Number(match[0]) : null;

console.log(amount); // 1000*/

// console.log("Bibek");



/*const temperature = 20;
const value = 2;
const pizza = 'pizza';
const pasta = 'pasta';

console.log(`The temperature is ${temperature}C\n ${value} plus ${value} makes ${value+value}\n I like ${pizza} and ${pasta}.`);*/


let a='9000';
// console.log(Number(a) + 50);
console.log(Number.isNaN(Number(a)));


const car = {
    Name: "BMW",
    color: "black",
    model: 154215,
    speed: function() {
        console.log("the speed is 250km/h");
    }
}

const bank ={
    Name: 'Nepal Bank ltd',
    location: 'Thapathali',
    grade:'A',
    funding:function() {
        console.log("government funding")
    }

}
// function calling inside object
bank.funding();
// value calling inside object 
console.log(bank.grade);