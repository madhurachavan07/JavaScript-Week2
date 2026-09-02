let products = [
    {name:"Phone", price:20000},
    {name:"Mouse", price:500},
    {name:"Charger", price:700}
];

let cheap = products.filter(p => p.price < 1000);
let names = cheap.map(p => p.name);

document.getElementById("result").textContent = names.join(", ");