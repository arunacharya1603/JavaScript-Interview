const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 22 },
    { id: 3, name: 'Tom Smith', age: 30 }
];

const mapObj = data.map(user => user.name);

console.log(mapObj);
