
function pluralCheck(days, hours, minutes, seconds) {

    let array = []
  
    if(Math.abs(days) === 1) { 
        array.push("dag")
    } else if (Math.abs(days) === 0) {
        array.push("Idag")
    } else {array.push("dagar")}
  
    if(Math.abs(hours) === 1) {
        array.push("timme")
    } else {
        array.push("timmar")
    }
  
    if(Math.abs(minutes) === 1) {
        array.push("minut") 
    } else {
        array.push("minuter") 
    }

    if(Math.abs(seconds) === 1) {
        array.push("sekund") 
    } else {
        array.push("sekunder")
    }
  
    return array
    
  }

export default pluralCheck