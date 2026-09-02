let products = [
    {name: "Phone", price: 20000},
    {name: "Charger", price: 500},
    {name: "Mouse", price: 700}
];

function total() {
    return products[0].price + products[1].price;
}

console.log(products);
console.log(total());