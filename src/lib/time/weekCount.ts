import mainTime from './mainTime'


export default function weekFinder(weekday, hour) {
    let month = mainTime().getMonth();
    let day = mainTime().getDate();

    console.log(day)


   
    day -= weekday + (hour/24)

    let week = Math.ceil((((month * 30.5) + day)/ 7))

    return week 
}

