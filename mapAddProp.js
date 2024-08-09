const employees = [
    { name: 'Alice', salary: 3000 },
    { name: 'Bob', salary: 4000 },
    { name: 'Charlie', salary: 5000 }
];

const addProp = employees.map(employee => {
    return{ ...employee, bonus:employee.salary*0.3}
});

console.log(addProp);
