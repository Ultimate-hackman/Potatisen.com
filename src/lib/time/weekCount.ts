import totalMonth from './totalMonth'

import * as dayjs from 'dayjs'
import * as isoWeek from 'dayjs/plugin/isoWeek'

dayjs.extend(isoWeek)


export default function weekFinder(weekday, hour) {
    let month: number = new Date().getMonth();
    let day: number = new Date().getDate();
    let nowHour: number = new Date().getHours();
    let week = dayjs().isoWeek()
    

    return ( weekday + (hour/24) >= new Date().getDay() + (nowHour/24)) ? week : week +1



    
}

