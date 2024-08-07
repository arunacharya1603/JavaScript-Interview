let data = {name:"JS"};
//---->name is a property of an object with value "JS"
console.log(delete data);//-----> However, delete does not affect variables declared with let, const, or var.
// console.log(delete data.name);
// console.log(data);

// The delete operator is used to remove a property from an object.
// delete data.name attempts to remove the name property from the data object.
// If the property is successfully removed, delete returns true.
// If the property cannot be deleted (e.g., if it's a non-configurable property), delete returns false.
// Output:
// true