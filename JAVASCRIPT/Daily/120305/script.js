let a = 10;

document.getElementById("h4").innerHTML = a;

const tout = () => {}

let b = 5;

for( let i = 1; i <= b; i++){
  function test(x){
setTimeout(() => {
 const para = document.createElement("p");
para.innerText = "This is a paragraph " + i;
document.body.appendChild(para); 
}, i*1000);
}
test(i);
}
