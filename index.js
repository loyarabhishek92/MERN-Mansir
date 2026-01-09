// const person="abhishek raj rauniyar bad bad bada";
// console.log(person.at(9));
// console.log(person.charAt(1));
// console.log(person.concat(" i am coder").concat(' from sarlahi'));
// console.log("shyam".concat('-Dev').concat('-Jee'));
// console.log(person.toUpperCase());
// console.log(person.toLowerCase());
// console.log(person.endsWith('a'));
// console.log(person.includes('p'));
// console.log(person.indexOf('i'));
// console.log(person.isWellFormed());
// console.log(person.toWellFormed());
// console.log(person.length);
// console.log(person.padStart());
// let str = "A";
// console.log(str.padStart(7, "a")); // "005
// console.log(person.repeat(4));
// console.log(person.replace('bad','good'));
// console.log(person.replaceAll('bad','good'));
// console.log(person.slice(5,15));
// console.log(person.substring(1,5));
// console.log(person.split('a'));



// const personName="ram";
// const age=92;
// const job='dev';
// // template literals
// console.log(`he is good ${personName} ${age} ${job}`);
// console.log(`he is good ${personName} ${age} ${job}`);
// const str = 'Mohan is a good boy';
// console.log(`My friend ${str}`);

// console.log("abishek\"".length);
// console.log("abishek\"".toUpperCase());
// console.log("abishek\"".toLowerCase());


/*const text = "plese give me rs 1000";

const match = text.match(/\d+/);
const amount = match ? Number(match[0]) : null;

console.log(amount); // 1000*/

// console.log("Bibek");



/*const temperature = -8;
const value = 5;
const pizza = 'pizza';
const pasta = 'pasta';

console.log(`The temperature is ${temperature}C\n ${value} plus ${value} makes ${value+value}\n I like ${pizza} and ${pasta}.`);*/


// let a='9000';
// console.log(Number(a) + 50);
// console.log(Number.isNaN(Number(a)));

// const num = 300.21;
// console.log(Number.isInteger(num));


// const car = {
//     Name: "BMW",
//     color: "black",
//     model: 154215,
//     speed: function() {
//         console.log("the speed is 250km/h");
//     }
// }

// const bank ={
//     Name: 'Nepal Bank ltd',
//     location: 'Thapathali',
//     grade:'A',
//     funding:function() {
//         console.log("government funding")
//     }

// }
// // function calling inside object
// bank.funding();
// // value calling inside object 
// console.log(bank.grade);

// console.log(Math.pow(2, 4));
// console.log(Math.tan(45));

/*const rating = 8.25515;
console.log(Math.floor(rating));
console.log(Math.ceil(rating));
console.log(Math.round(rating));*/

// const random = Math.random()*4;   
// // console.log(random);  
// console.log(Math.floor(random));


/*let age = 20;
const result = age>50 ? 'senior': age<20 ? 'junior': 'regular';
console.log(result);*/

/*let age= 30;
if(age>50){
    console.log('senior');
} else if(age<20){
    console.log('junior');
}else{
    console.log('regular');
}
*/

/*let netsalary=8000;
let expanses = 5000;
if(netsalary>expanses){
    console.log(`you have saved ${netsalary-expanses} this month`)
} else if(netsalary<expanses){
    console.log(`you have lost ${expanses-netsalary} this month`);
}else{
    console.log('your balance has not changed');
}*/

/*let a = 51;
if(a%2==0){
    console.log('even number');
}else{
    console.log('odd number');
}*/

/*const weekDay = 'wednesday';
switch(weekDay){
    case 'sunday':
        console.log('you type sunday');
        break;
    case 'monday':
        console.log('you type monday');
        break;
    case 'tuesday':
        console.log('you type tuesday');
        break;
    case 'wednesday':
        console.log('you type wednesday');
        break;
    case 'thrisday': 
        console.log('you type thrisday');
        break;
    case 'friday':
        console.log('you type friday');
        break;
    case 'saturday':
        console.log('you type saturday');
        break;
        default:
            console.log('you donot type any day');
}*/


/*let a =20;
let b=30;
const calcu= a-b;
switch(calcu){
    case (a+b):
        console.log(`addition is ${calcu}`);
        break;
    case (a-b):
        console.log(`subtraction is ${calcu}`);
        break;
    case (a*b):
        console.log(`multiply is ${calcu}`);
        break;
    case (a/b):
        console.log(`division is ${calcu}`);
        break;
    case (a%b):
        console.log(`modules is ${calcu}`);
        break;
    default:
        console.log('don\'t perform any calculation');
}*/

/*let v1 = 21;
let v2 = 38;
const result = 'multi';
switch(result){
    case('add'):
        console.log(`Addition of ${v1} and ${v2} is ${(v1+v2)}.`);
        break;
    case('sub'):
        console.log(`Subtraction of ${v1} and ${v2} is ${(v1-v2)}.`);
        break;
    case('multi'):
        console.log(`Multiplication of ${v1} and ${v2} is ${(v1*v2)}.`);
        break;
    case('divide'):
        console.log(`Division of ${v1} and ${v2} is ${(v1/v2)}.`);
        break;
    case('module'):
        console.log(`Modules of ${v1} and ${v2} is ${(v1%v2)}.`);
        break;
    default:
        console.log('Expression is invalid');
}*/


// loops

/*let a=0;
while(a<10){
    a++;
    console.log(`${a}`);
}*/

/*let a = 0;
while(a<10){
    a++;
    console.log(`${a}`);
    if(a%2===0){
        console.log('even number');
    }else{
        console.log('odd number');
    }  
}*/

/*let i = 0;
do {
  i++;
  console.log('hello world');

} while (i < 5)
*/

/*let sum =0;
for (let i=1 ; i<=15;i++)
{
    console.log(`${i}`);
    sum = sum + i;
}
console.log(`The sum of all number is ${sum}`);*/

/*let i=0;
for(i=1; i<=5; i++){
    
    if(i%3===0 && i%5===0){
        console.log(`${i} is fizz buzz`);
    }else if(i%3===0){
        console.log(`${i} is fizz`);
    }else if(i%5===0){
        console.log(`${i} is buzz`);
    }else{
        console.log(`${i}`);
    }
}*/

/*let sum = 0;
const person1 = [11,22,33,44,55,66];
for(let i of person1){
    // console.log('hello')
    console.log(i);
    sum = sum +i; 
}
console.log(`sum of array is ${sum}`);*/