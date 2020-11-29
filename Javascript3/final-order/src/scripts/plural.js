import countUp from './countup.js'

function dagar() {

    let array = []

    let days = countUp()

    if(days == 1) {
        array.push(" dag ") 
    } else {
        array.push(" dagar ")
    }
  
    return array

    
}
export default dagar