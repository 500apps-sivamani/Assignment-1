var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let globearr=[...arr]
  globearr.sort((a,b)=>{
  	return a-b;
  }) 
  return globearr;
  // Add your code above this line
}

  function getOutput() {
    document.getElementById("output").innerText =  nonMutatingSort(globalArray);
      }
