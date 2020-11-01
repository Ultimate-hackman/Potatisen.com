function countDown(date) {
    setInterval(function() {
        let past = new Date(date).getTime(); 
        let now = new Date().getTime();

        let difference = now - past

        totalHour = Math.floor(difference / (1000 * 60 * 60));
        totalMinutes = Math.floor((difference / 1000) / 60);
        totaldays = Math.floor(difference / (1000 * 60 * 60 * 24));
        totalMonths = Math.floor(difference / (1000 * 60 * 60 * 24 * 31));
        
        
        let days = Math.floor(difference / (1000 * 60 * 60 * 24) - totalMonths);
        let hours = Math.floor((((difference / 1000) / 60) / 60) - totaldays * 24);
        let minutes = Math.floor(((difference / 1000) / 60) - totalHour * 60);
        let seconds = Math.floor((difference / 1000) - totalMinutes * 60);


        // plural check
        pluralCheck(days, hours, minutes, seconds)

        
            document.getElementById("countdown").innerHTML = 'Online sedan: ' + days + d + hours + h + minutes + m + seconds + s


    }, 1000)


}

function pluralCheck(days, hours, minutes, seconds) {

    if(days == 1) {
        d = " dag, "
    } else {
        d = " dagar, "
    }

    if(hours == 1) {
        h = " timme, "
    } else {
        h = " timmar, "
    }

    if(minutes == 1) {
        m = " minut, "
    } else {
        m = " minuter, "
    }

    if(seconds == 1) {
        s = " sekund "
    } else {
        s = " sekunder "
    }

    
}

countDown("sep 13, 2020 18:27:00")



