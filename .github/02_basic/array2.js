const arr=["rohan","sameer","ankit"]
const arr1 =["sourav","suraj","gajendra"]
//  arr.push(arr1)
//  console.log(arr);

const a=arr.concat(arr1);
const c= [...arr,...arr1] //concatinate more than 2 strings like this good practice 
console.log(c);

console.log(a);
const b=[1,2,3,[4,5,6],[7,8,[9,10]]]
console.log(b);
 console.log(b.flat(Infinity));
// conversion of strings to array
console.log(Array.isArray("rohan"));
console.log(Array.from("rohan"));
console.log(Array.from({name:"rohan"})); //special case because we are passing a object



