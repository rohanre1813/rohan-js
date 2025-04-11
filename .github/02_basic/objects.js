console.log("objects in deep");
const a= Symbol("raga")
let abs={
    name:"rohan",
    rollno:36,
    [a]:"raga bhai",
    place:"banglore",
    married:false

}
console.log(abs[a]);

console.log(abs);
Object.freeze(abs) //freezes the object doesnt reflects any changes after this if any changes made after
abs.name="abhi"
console.log(abs.name);


