// discussing about scope
// using var is a  bad practice because it gives value outside scope too
var c=10
const a=200
const b=300
if(true){
    var c=20
    const b=30
    const a=40
}
console.log(c); //its shouldn't have given 20 but var gives value outside scope
console.log(a);
console.log(b);

if(true){
    const user="rohan"
    if(user=="rohan"){
        const website="github"
        console.log(user + website);
        
    }
    console.log(user);
    
}
//  console.log(website);  this will give error as website is not in the scope
//  console.log(user); same here user is not in the scope
 
// __________________________interesting example____________________________________
   
console.log(add1(5));

function add1(num){
       return num+1
    }
    // console.log(add2(6)); we cannot write this here 
    
    const add2=function (num) {
        return num+2;
    }
    console.log(add2(6));
 

