import months from '../time/months'
import monthsLenght from '../time/monthsLenght'

export default function monthUpdate(i, currentMonth) {
  let array = new Array



  
    if (i > monthsLenght[currentMonth]) {
        array.push(i -=  monthsLenght[currentMonth])
        if (currentMonth === 11) {
          array.push(currentMonth -= 11)
        }


        if (currentMonth != 11) {
          array.push(currentMonth += 1)          
        }

      }

      if ( i < monthsLenght[currentMonth] && i > 0) {
        array.push(i)
        array.push(currentMonth)
      }

      if (i <= 0) {
        array.push(monthsLenght[currentMonth] + i)
        if (currentMonth === 0) {
          array.push(currentMonth + 11)
        } else {
          array.push(currentMonth - 1)
        }
        
      }

  return array
}