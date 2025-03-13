//Object
let obj = {name: 'Name', age: 10, fun: () => {return "Testing This funtion";}, test: this.age,}
console.log(`Value of the object are ${obj.name + ":" +obj.age}`);
document.getElementById("test").innerHTML = `${obj.name + " : " +obj.age}`;
document.getElementById("test_two").innerHTML = obj.fun();

//console.log(obj.test)

this.alert("test")
