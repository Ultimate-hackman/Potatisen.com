
import dayjs from 'dayjs'


function totalMonth(num) {
  let date = new Date()

    let output: number = 0
    for (let i = 0; i < num; i++) {
      date.setMonth(i)
      output += dayjs(date).daysInMonth() 
    }
    return output
  }

export default totalMonth