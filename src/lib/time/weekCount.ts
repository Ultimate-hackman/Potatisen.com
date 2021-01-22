import totalMonth from './totalMonth'

export default function weekFinder(weekday, hour) {
    let month: number = new Date().getMonth();
    let day: number = new Date().getDate();
    let nowHour: number = new Date().getHours();

    let week: number = Math.floor(totalMonth(month) + day / 7)
    

    return ( weekday + (hour/24) >= new Date().getDay() + (nowHour/24)) ? week : week +1



    
}

