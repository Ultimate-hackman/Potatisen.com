function wencesAttack(date) {
    let past = new Date(date).getTime(); 

    setInterval(function() {
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
        if(days == 1) {
            c = " dag, "
        } else {
            c = " dagar, "
        }

        if(hours == 1) {
            d = " timme, "
        } else {
            d = " timmar, "
        }

        if(minutes == 1) {
            e = " minut, "
        } else {
            e = " minuter, "
        }

        if(seconds == 1) {
            f = " sekund, "
        } else {
            f = " sekunder, "
        }


        

            document.getElementById("countdown").innerHTML = 'Online sedan: ' + days + c + hours + d + minutes + e + seconds + f


    }, 1000)


}

wencesAttack("sep 13, 2020 18:27:30")



