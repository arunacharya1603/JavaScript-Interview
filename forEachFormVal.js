const formInputs = [
    { name: 'email', value: 'user@example.com' },
    { name: 'password', value: 'password123' },
    { name: 'confirmPassword', value: 'password123' },
];

let valid = true;

formInputs.forEach(input=> {
    if(input.value === ''){
        console.log(`${input.name} is required!!`);
        valid=false;
    }
});

valid ? console.log('Form is valid') : console.log('Form is not valid');