import monthsLenght from "./monthsLenght"


function totalMonth(num) {

    let output: number = 0
    for (let i = 0; i < num; i+=1) {
      output += monthsLenght[i]
    }
    return output
  }

export default totalMonth