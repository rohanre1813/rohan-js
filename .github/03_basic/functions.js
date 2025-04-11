// functions are used to make the program reusable
// we can write block of code in functon and use to multiple times when we need it
function name(){
   console.log("rohan");
   console.log("abhi");
   console.log("sameermg");
}
name()
name()

function add(num1,num2){  //here num1 and num2 are parameters 
   console.log(num1+num2);
   
}
add(3,4)//3 & 4 are arguements
const result=add(3,4);

function sub(num1,num2){
   if(num1==undefined || num2==undefined){
      console.log("please enter the 2 numbers");
      return
   }
    return num1-num2;
}

console.log(sub(5));
console.log(sub(10,5));

// passing object as a parameter 

// first we create an object which we want to pass
const person={
    name:"rohan",
    age: 22
}

function printing(obj){
  console.log(`my name is ${obj.name} and i am ${obj.age} years old `);
  
}
printing(person);
// we can also pass keys as arguements
printing({
   name:"sameer",
   age:22
})
// passing number of parameters dynamically i.e we dont know how many parameters user will pass
// he can pass parameters as much he wants

function adding(...num1){
   console.log(`given numbers by the user are ${num1}`);
   return num1
   
}
console.log(adding(5,6,7,8,9,10));
// all the parameters are stored in an array



