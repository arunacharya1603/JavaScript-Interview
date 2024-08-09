const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
];

const prodDetails = products.map(prod => `${prod.name} costs for ${prod.price}`)

console.log(prodDetails);
