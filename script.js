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

window.onload = (function () {
    getDateTime();
    window.setInterval(function () {
    getDateTime();
}, 1000);
})();

function getDateTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    let blague = ["T’as une bonne descente j’aimerais pas la faire à vélo", "Santé, mais pas les pieds !", "Eh oh, on est à la bonne franquette hein", "Pastis par temps bleu, pastis merveilleux", "Oh la la on se calme, pas plus haut que le verre",
        "Est-ce qu'il ferait pas soif ?", "J'ai le gosier asséché", "Encore un que les boches n'auront pas", "Je vais vider l'eau des olives"]
    if (minute == 15) {
        document.getElementById('joke').innerHTML = blague[0];
    }
    else if (minute == 16) {
        document.getElementById('joke').innerHTML = blague[1];
    }
    else if (minute == 17) {
        document.getElementById('joke').innerHTML = blague[2];
    }
    else if (minute == 18) {
        document.getElementById('joke').innerHTML = blague[3];
    }
    else if (minute == 19) {
        document.getElementById('joke').innerHTML = blague[4];
    }
    else if (minute == 48) {
        document.getElementById('joke').innerHTML = blague[5];
    }
    else if (minute == 49) {
        document.getElementById('joke').innerHTML = blague[6];
    }
    else if (minute == 50) {
        document.getElementById('joke').innerHTML = blague[7];
    }
    else if (minute == 51) {
        document.getElementById('joke').innerHTML = blague[8];
    }
    else {
        document.getElementById('joke').innerHTML = "Le site est actuellement fermé. Revenez demain."
    }
}

/*function animBouteille(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    if (minute == 15){
        document.getElementById("anim").animate([
        // keyframes
        { transform: "translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="url(#bottle-fill)" stroke="#000000" stroke-width="200px" },
        { transform: 'translateY(-300px)' }
    ], {
        // timing options
        duration: 1000,
        iterations: Infinity
        });
    }
}*/