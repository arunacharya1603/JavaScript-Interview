const data = [
    {
        id:1,
        name: 'John',
        age: 25,
        country: 'USA'
    },
    {
        id:2,
        name: 'Jane',
        age: 22,
        country: 'USA'
    },
    {
        id:3,
        name: 'Tom',
        age: 30,
        country: 'UK'
    },
];

const forEach1 = (data)=>{
    data.forEach(item =>{
        console.log(item.name);
    })
}
forEach1(data);