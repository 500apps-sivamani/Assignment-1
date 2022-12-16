function sentensify(str) {

    let value=str.split(/\W/).join(" ");
    return value;
   
  }

function getOutput() {
    document.getElementById("output").innerText =sentensify("May-the-force-be-with-you");
 
    
      }
