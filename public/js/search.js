
function selectSearchBar() {
    var input = document.getElementById('searchBar');
    input.focus();
    input.select();
}

function closePopUp() {
    const popUp = document.getElementById("apps_popup")
    popUp.style.animation = 'out 1s';
    popUp.style.right = '-500vh';
    selectSearchBar()
    return "PopUp closed"
};
function openPopUp() {
    const popUp = document.getElementById("apps_popup")
    popUp.style.animation = 'in .5s';
    popUp.style.right = '0';
};

function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var day = dateTime.getUTCDate();
    var month = dateTime.getUTCMonth();
    var year = dateTime.getUTCFullYear();

    if (month == 1) {
        month = "Jan"
    } else if (month == 2) {
        month = "Feb"
    } else if (month == 3) {
        month = "Mar"
    } else if (month == 4) {
        month = "Apr"
    } else if (month == 5) {
        month = "May"
    } else if (month == 6) {
        month = "June"
    } else if (month == 7) {
        month = "July"
    } else if (month == 8) {
        month = "Aug"
    } else if (month == 9) {
        month = "Sept"
    } else if (month == 10) {
        month = "Oct"
    } else if (month == 11) {
        month = "Nov"
    } else if (month == 12) {
        month = "Dec"
    }

    if (min <= 9) {
      min = "0" + min;
    } 
    
    if (hrs <= 9) {
      hrs = "0" + hrs;
    }

    if (day <= 9) {
      day = "0" + day;
    } 


    document.getElementById("clock").innerHTML = hrs + ":" + min;
    document.getElementById("date").innerHTML = day + " " + month + ", " + year;
}







var quote = document.getElementById("quote")


$("body").on('keyup', function (event) {
    if (event.keyCode === 27) {
        closePopUp()
    }
 });

$("#searchBar").on('keyup', function (event) {
    let src = "https://duckduckgo.com/?t=ffab&q=";

    let google = "https://www.google.com/search?q=";
    let bing = "https://www.bing.com/search?q=";
    let pirate = "https://www.thepìratebay.com/s/?q=";
    let start = "https://www.startpage.com/search?q=";
    let searx = "https://searxng.nicfab.eu/search?q=";



    if (event.keyCode === 13) {
        let text = document.getElementById("searchBar").value;
        var f = text.split(':');

        if (f[0] == "google") {
            let final = f[1].substring(1).replace(" ", "+");

            let link = google + final;
            window.location.replace(link);

        }
        else if (f[0] == "bing") {
            let final = f[1].substring(1).replace(" ", "+");

            let link = bing + final;
            window.location.replace(link);

        }
        else if (f[0] == "pirate") {
            let final = f[1].substring(1).replace(" ", "+");

            let link = pirate + final;
            window.location.replace(link);

        }
        else if (f[0] == "start") {
            let final = f[1].substring(1).replace(" ", "+");

            let link = start + final;
            window.location.replace(link);

        }
        else if (f[0] == "searx") {
            let final = f[1].substring(1).replace(" ", "+");

            let link = searx + final;
            window.location.replace(link);
        }
        
        
        
        else if (text == "" || text == " " || text == "  " || text == "  " || text == "   " || text == "    " || text == "     " || text == "      ") {
            null

        } else {
            let final = text.replace(" ", "+");
            let link = src + final;
            window.location.replace(link);
        }
        
    }
 });



selectSearchBar()
setInterval(displayTime, 10)





