
let Prices = [200, 50, 500, 100, 800];
console.log(Prices)
let filterPrices = Prices.filter(price => price > 100)
console.log ('filterPrices', filterPrices);

Prices.push(600,700);
console.log ('updated Prices after adding', Prices);

Prices.shift();
console.log ('prices after removing  first item', Prices);

let searchprice = 500;
let index = Prices.indexOf(searchprice);
console.log(`Index of price ${searchprice}:`, index);

let employee = {
    name: "Chi Ben",
    dateOfBirth: "2000-05-15",
    salary: 100000,
    address: "23 ketu  St, lagos"
};
console.log("Employee Name:", employee.name);
console.log("Date of Birth:", employee.dateOfBirth);
console.log("Salary:", employee.salary);
console.log("Address:", employee.address)
    

    




