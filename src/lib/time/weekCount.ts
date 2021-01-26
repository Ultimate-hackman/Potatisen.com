
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs.extend(isoWeek)


export default function weekFinder(weekday, hour) {
    let nowHour: number = new Date().getHours();
    let week = dayjs().isoWeek()
    
    return ( weekday + (hour/24) >= new Date().getDay() + (nowHour/24)) ? week : week +1



    
}

