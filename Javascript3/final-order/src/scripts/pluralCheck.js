
export default function pluralCheck(days, hours, minutes, seconds) {

    let array = []
  
    if(days === 1) {
        array.push("dag") 
    } else {
        array.push("dagar")
    }
  
    if(hours === 1) {
        array.push("timme")
    } else {
        array.push("timmar")
    }
  
    if(minutes === 1) {
        array.push("minut") 
    } else {
        array.push("minuter") 
    }
  
    if(seconds === 1) {
        array.push("sekund") 
    } else {
        array.push("sekunder")
    }
  
    return array
    
  }

