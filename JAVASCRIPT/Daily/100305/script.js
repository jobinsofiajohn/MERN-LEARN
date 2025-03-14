globalThis.a = 10;
let b = 5;
console.log(a);
console.log(b);
console.log("test");
var a =10;
//let b= 7;
const add = () => a+b;
console.log(add());
const age = 18;
age == 10  ? console.log("yes") : console.log("no");
const test =(x) => age != x ? console.log("this works") : console.log("This");
test(18);
(function test(){
let a = 11;
console.log(globalThis.a);
})();
