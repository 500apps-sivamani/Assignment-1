function checkPositive(arr) {

    return arr.some(function(Value) {
      return Value > 0;
    });
      // Only change code below this line
    
    
      // Only change code above this line
    }
    






function getOutput() {
    document.getElementById("output").innerText =checkPositive([1, 2, 3, -4, 5]);;
 
    
      }
