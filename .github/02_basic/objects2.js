const rohan = new Object()
console.log(rohan);

const sameer={
       age:22,
       height:{
        feet: 5,
        inch : 7
       }
}
console.log(sameer);
const o1={1:"a",2:"b"};
const o2={3:"c",4: "d"};
const o3={5:"e",6:"f"};
console.log(o1,o2,o3);
const o4=Object.assign({},o1,o2,o3);
//or u can also use ... as we did in array
const o5={...o1,...o2,...o3};
console.log(o5);

 console.log(o4);
// array of objects
const a=[
    {
        name: "rohan",
        age: 22
    },
    {
        name: "sameer",
        age: 22
    },
    {
        name:"parineeth",
        age :"23"
    }
]
console.log(a[0]); //object 1 at index 0 
console.log(a[1]);
console.log(a[2]);
console.log(a);  //whole array of objects
console.log(Object.keys(a[0])); //accessing all keys of an object and placing it in an new array
console.log(Object.values(a[0])); // values of object
console.log(Object.entries(a[1]));





