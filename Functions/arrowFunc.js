const regularFunction = function(){
    console.log('Regular function');
};

const arrowFunction = () => {
    console.log('Arrow function');
};

const obj = {
    regularFunction: regularFunction,
    arrowFunction: arrowFunction
};

obj.regularFunction();
obj.arrowFunction();