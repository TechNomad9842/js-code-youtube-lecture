const obj1 = {1 : "a", 2 : "b", 3 : "c"}
const obj2 = {4 : "a", 5 : "b", 6 : "c"}
//const obj3 = Object.assign(obj1 , obj2)
const obj3 = Object.assign({},obj1 , obj2)

console.log(obj3)
console.log(Object.keys(obj1))
 