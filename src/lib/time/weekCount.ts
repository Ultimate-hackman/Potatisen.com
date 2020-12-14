export default function weekFinder(weekday, hour) {
    let month = new Date().getMonth();
    let day = new Date().getDate();

   
    day -= weekday - (hour/24)

    let week = Math.ceil((((month * 30.5) + day)/ 7))

    return week 
}

