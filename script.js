// Date
/* Async function that calculates time at every ms */
function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/* Function that gets local date and time and display them in the HTML */
async function displayDate() {
    while (true) {
        await pause(1000);
        var today = new Date();
        var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
        var date = today.toLocaleDateString("en-US", options);
        var hour = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
        var datehour = date + " " + hour;
        var datehour = datehour.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
        document.getElementById('datehour').innerHTML = datehour;
    }
}
displayDate();

// Jokes - the function refreshes every second and changes jokes every 5 minutes
window.onload = (function () {
    getDateTime();
    window.setInterval(function () {
    getDateTime();
}, 1000);
})();

// Cheers - same functionality as jokes but refreshes every 20 seconds and changes cheers everytime
window.onload = (function () {
    displayCheers();
    window.setInterval(function () {
    displayCheers();
}, 20000);
})();

// Function that makes jokes be linked to a specific minute
function getDateTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    let jokes = ["T’as une bonne descente j’aimerais pas la faire à vélo", "Santé, mais pas des pieds !", "Eh oh, on est à la bonne franquette hein", "Pastis par temps bleu, pastis merveilleux", "Oh la la on se calme, pas plus haut que le verre",
        "Est-ce qu'il ferait pas soif ?", "J'ai le gosier asséché", "Encore un que les boches n'auront pas", "Je vais vider l'eau des olives", "Le cœur a ses raisons que le Ricard ignore", "Bière qui roule n'amasse pas mousse", "J'te mets la p'tite sœur ?"]
       
    if (minute == 0) {
        document.getElementById('joke').innerHTML = jokes[0];
    }
    else if (minute == 5) {
        document.getElementById('joke').innerHTML = jokes[1];
    }
    else if (minute == 10) {
        document.getElementById('joke').innerHTML = jokes[2];
    }
    else if (minute == 15) {
        document.getElementById('joke').innerHTML = jokes[3];
    }
    else if (minute == 20) {
        document.getElementById('joke').innerHTML = jokes[4];
    }
    else if (minute == 25) {
        document.getElementById('joke').innerHTML = jokes[5];
    }
    else if (minute == 30) {
        document.getElementById('joke').innerHTML = jokes[6];
    }
    else if (minute == 35) {
        document.getElementById('joke').innerHTML = jokes[10];
    }
    else if (minute == 40) {
        document.getElementById('joke').innerHTML = jokes[11];
    }
    else if (minute == 45) {
        document.getElementById('joke').innerHTML = jokes[7];
    }
    else if (minute == 50) {
        document.getElementById('joke').innerHTML = jokes[8];
    }
    else if (minute == 55) {
        document.getElementById('joke').innerHTML = jokes[9];
    }
    else {
        document.getElementById('joke').innerHTML = "Enough jokes for today! Come back tomorrow :-)"
    }
}

// Function that randomly selects a way to say cheers from a local JSON and display it in the HTML
function displayCheers(url, parametre, successCallBack){
    $.ajax({
        dataType: "json",
        url: "./cheers.json",
        success: function (cheers) {
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var item = cheers.countries[Math.floor(Math.random()*cheers.countries.length)];
            var second = now.getSeconds();
            if (second%60 == 0){
                document.getElementById('santé').innerHTML = "We say " + " « " + item.spelling + " » "+ " in " + item.names[0] + " when we drink !" + "<br>Pronounce it this way: " + item.phonetics[0]
            }
            else {
                document.getElementById('santé').innerHTML = "We say " + " « " + item.spelling + " » "+ " in " + item.names[0] + " when we drink !" + "<br>Pronounce it this way: " + item.phonetics[0]  
            }
        }
    })
}
