

export default function weekFinder(weekday, hour) {
    let month: number = new Date().getMonth();
    let day: number = new Date().getDate();
    let nowHour: number = new Date().getHours();

    let week: number = (Math.ceil(month * 30.5) / 7) + (day - day % 7) / 7

    return ( weekday + (hour/24) < (day % 7) + nowHour/24 ) ? Math.floor(week + 1) : week 



    
}

