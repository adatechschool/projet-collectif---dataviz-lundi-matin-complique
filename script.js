// Date
function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function afficherDate() {
    while (true) {
        await pause(1000);
        var cejour = new Date();
        var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
        var date = cejour.toLocaleDateString("fr-FR", options);
        var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
        var dateheure = date + " " + heure;
        var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
        document.getElementById('dateheure').innerHTML = dateheure;
    }
}
afficherDate();
// Blagues
window.onload = (function () {
    getDateTime();
    window.setInterval(function () {
    getDateTime();
}, 1000);
})();

// Santé
window.onload = (function () {
    displayCheers();
    window.setInterval(function () {
    displayCheers();
}, 20000);
})();

function getDateTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    let blague = ["T’as une bonne descente j’aimerais pas la faire à vélo", "Santé, mais pas des pieds !", "Eh oh, on est à la bonne franquette hein", "Pastis par temps bleu, pastis merveilleux", "Oh la la on se calme, pas plus haut que le verre",
        "Est-ce qu'il ferait pas soif ?", "J'ai le gosier asséché", "Encore un que les boches n'auront pas", "Je vais vider l'eau des olives", "Le cœur a ses raisons que le Ricard ignore", "Bière qui roule n'amasse pas mousse", "J'te mets la p'tite sœur ?"]
       
        if (minute = 0) {
        document.getElementById('joke').innerHTML = blague[0];
    }
    else if (minute = 5) {
        document.getElementById('joke').innerHTML = blague[1];
    }
    else if (minute = 10) {
        document.getElementById('joke').innerHTML = blague[2];
    }
    else if (minute = 15) {
        document.getElementById('joke').innerHTML = blague[3];
    }
    else if (minute = 20) {
        document.getElementById('joke').innerHTML = blague[4];
    }
    else if (minute = 25) {
        document.getElementById('joke').innerHTML = blague[5];
    }
    else if (minute = 30) {
        document.getElementById('joke').innerHTML = blague[6];
    }
    else if (minute = 35) {
        document.getElementById('joke').innerHTML = blague[10];
    }
    else if (minute = 40) {
        document.getElementById('joke').innerHTML = blague[11];
    }
    else if (minute = 45) {
        document.getElementById('joke').innerHTML = blague[7];
    }
    else if (minute = 50) {
        document.getElementById('joke').innerHTML = blague[8];
    }
    else if (minute = 55) {
        document.getElementById('joke').innerHTML = blague[9];
    }
    else {
        document.getElementById('joke').innerHTML = "Le site est actuellement fermé. Revenez demain."
    }
}

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
