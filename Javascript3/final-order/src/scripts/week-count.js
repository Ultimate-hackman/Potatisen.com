export default function weekFinder() {
    let month = new Date().getMonth();
    let day = new Date().getDate(); 

    day -= 4.7
    let week = Math.ceil(((month * 30.5) + day) / 7) 

    return week 
}

