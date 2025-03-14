//const test = document.getElementById('test');
//const cont = document.getElementById('cont');
//
//test.addEventListener('keydown', function(event){
//  if(event.key === 'Enter'){
//      console.log(test.value);
//     const newin = document.createElement("input")
//     newin.value = test.value.toUpperCase();
//     cont.appendChild(newin);
//     test.value = '';
//  }
//})

function Test(Name, Age, Year){
  this.name = Name;
  this.age = Age;
  this.year = Year;
}

const fir = new Test("name","fsdfsd",5);

console.log(fir.name);
