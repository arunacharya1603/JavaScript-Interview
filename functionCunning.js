let sum = (num1)=>{
    return (num2) => {
        return (num3) =>{
            console.log(num1+num2+num3);
        }
    }
}

sum(2)(3)(4);