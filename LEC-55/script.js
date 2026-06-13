console.log("Hey this is tutorial 55")

var a = 5;
let b = 10;
let c = "Chetan"
// console.log("The sum of no is:"+(a+b))

// console.log(typeof a, typeof b, typeof c)

// const a1 = 6;
//       a1=a1+1; //Not allowed because a1 is constant
// {   
//     let a = 66; 
//     console.log(a)
// }
{   
    var a = 66; 
    console.log(a)
}

let x = "Chetan"
let y = 22;
let z = 3.55;
const p = true; //cant be change beacuse its block scoped (const)
let q = undefined;
let r = null;
var d = 55 //can be changed because its global value

console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r,typeof d) 

let o = {
    "name" : "Harry",
    "jobe code" : 5600
    "is_handsome":true 
}
console.log(o)
o.salary = "100crores"

console.log(o)
o.salary ="500crores"