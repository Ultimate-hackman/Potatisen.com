export default function weekFinder(weekday, hour) {
    let month = new Date().getMonth();
    let day = new Date().getDate();

    let target = [weekday, hour]

   
    day -= target[0] + (target[1]/10)/2.4

    let week = Math.ceil((((month * 30.5) + day)/ 7))

    return week 
}

