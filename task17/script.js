function alphabeticalOrder(arr) {
 
  return arr.sort(function(arg1,arg2) {
    return arg1 === arg2 ? 0 : arg1 > arg2 ? 1 : -1;
  });

}
  function getOutput() {
    document.getElementById("output").innerText = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);;
      }
