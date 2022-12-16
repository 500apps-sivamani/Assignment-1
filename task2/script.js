
const prepareGreenTea = () => 'greenTea';


const prepareBlackTea = () => 'blackTea';


const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
// Only change code above this line




function getOutput() {
    document.getElementById("output1").innerText = tea4GreenTeamFCC;
    document.getElementById("output2").innerText = tea4BlackTeamFCC;
    
      }
