 function weekFinder() {
    let month = new Date().getMonth();
    let day = new Date().getDate(); 

    day -= 2.2

    let week = Math.ceil(((month * 30.5) + day) / 7) 

    week += 1

 return <p>Veckobrev vecka {week}</p>

}

export default weekFinder;