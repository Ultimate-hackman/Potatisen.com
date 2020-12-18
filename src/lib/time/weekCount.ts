import mainTime from './mainTime'


export default function weekFinder(weekday, hour) {
    let month = mainTime().getMonth();
    let day = mainTime().getDate();
    let nowHour = mainTime().getHours();


    console.log(day % 7 + (nowHour/24))

    let week = (Math.ceil(month * 30.5) / 7) + (day - day % 7) / 7

    if ( weekday + (hour/24) < (day % 7) + nowHour/24 ) {
        return Math.floor(week + 1)
    } else {
        return week 
    }



    
}

