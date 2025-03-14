const inputElement = document.getElementById('inone');
const button = document.getElementById('bt');
const div = document.getElementById('elements-container');


inputElement.addEventListener('keydown', function(event) {

  if (event.key === 'Enter') {
    event.preventDefault();
  }
  if (event.key === 'Enter' && inputElement.value !='') {
    const inp = document.createElement("input");
    inp.value= inputElement.value;
    div.appendChild(inp);
    inputElement.value = '';
  }
});

button.addEventListener('click', function(clear){

  if(div.innerHTML){
  div.innerHTML = '';
  
  alert("All the newly created elements will be cleared from screen");
  }
  else{
    alert("There is nothing to clear");
  }

})
