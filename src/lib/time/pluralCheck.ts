function pluralCheck(days, hours, minutes, seconds) {

    let array = new Array()
  
    if(Math.abs(days) === 1) { 
        array.push("dag")
    } else {
        array.push("dagar")
    }
  
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

