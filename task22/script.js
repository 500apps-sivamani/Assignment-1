function checkPositive(arr) {
    return arr.every(function(Value) {
          return Value >  0;
  });
  }
 


function getOutput() {
    document.getElementById("output").innerText =checkPositive([1, 2, 3, -4, 5]);
 
    
      }
