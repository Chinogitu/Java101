//we are learning statemet, declearation of veriables
let message= "welcome to javascript class";
console.log(message);
let message1= message + ",thanks for joining us.";
console.log(message1);
let message2= message +",how can we help you.";
console.log(message2);

//am learning block of codes
var stat= true;
if(stat){
    let message="status is true";
    console.log(message);
}
else{
let message="status is false";
console.log (message);

}
const workDay=5;

console.log(workDay);
let counter = 120;
console.log(typeof(counter));
counter = false;
console.log(typeof(counter));
counter = "Hi";
console.log(typeof(counter));
let person = {firstName: 'John', lastName: 'Doe'};
console.log (person.firstName +' '+person.lastName);
let colors = ['red','green','blue'];
console.log(colors[2])
console.log(colors[0]);
colors.push('black');
console.log(colors);
colors.unshift('white');
console.log(colors)
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);
let numbers = [1,2,3,6,4,8,5];
let numbersGreaterThan4=numbers.filter((n) => n<4);
console.log (numbersGreaterThan4);