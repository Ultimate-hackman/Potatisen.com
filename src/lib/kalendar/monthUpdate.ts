import monthsLenght from '../time/monthsLenght'

export default function monthUpdate(i, currentMonth) {
  let array = new Array
  
    if (i > monthsLenght[currentMonth]) {
        array.push(i -=  monthsLenght[currentMonth])
        if (currentMonth === 11) {
          array.push(currentMonth -= 11)
        } else {
          array.push(currentMonth += 1)
        }
      } else {
        array.push(i)
        array.push(currentMonth)
      }
  return array
}
