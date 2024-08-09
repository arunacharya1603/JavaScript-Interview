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

const filterObject = (data, key, value)=> {
    // Function Parameters: The filterObject function takes three parameters: data (the array of objects),
    // key (the property to filter by), and value (the value to compare against).
    return data.filter(item => item[key] > value);
    //The function uses the filter method to iterate through each object in the data array. 
    //
}

const userOlderThan22 = filterObject(data, 'age', 22);

console.log(userOlderThan22);