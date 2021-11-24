// Date
/* Async function that calculates time at every ms */
function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/* Function that gets local date and time and display them in the HTML */
async function displayDate() {
  while (true) {
    await pause(1000);
    var today = new Date();
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    var date = today.toLocaleDateString("en-US", options);
    var hour =
      ("0" + today.getHours()).slice(-2) +
      ":" +
      ("0" + today.getMinutes()).slice(-2) +
      ":" +
      ("0" + today.getSeconds()).slice(-2);
    var datehour = date + " " + hour;
    var datehour = datehour.replace(/(^\w{1})|(\s+\w{1})/g, (lettre) =>
      lettre.toUpperCase()
    );
    document.getElementById("datehour").innerHTML = datehour;
  }
}
displayDate();

// Jokes - the function refreshes every second and changes jokes every 5 minutes
window.onload = (function () {
  getDateTime();
  window.setInterval(function () {
    getDateTime();
  }, 300000);
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
  let jokes = [
    "T’as une bonne descente j’aimerais pas la faire à vélo",
    "Santé, mais pas des pieds !",
    "Eh oh, on est à la bonne franquette hein",
    "Pastis par temps bleu, pastis merveilleux",
    "Oh la la on se calme, pas plus haut que le verre",
    "Est-ce qu'il ferait pas soif ?",
    "J'ai le gosier asséché",
    "Encore un que les boches n'auront pas",
    "Je vais vider l'eau des olives",
    "Le cœur a ses raisons que le Ricard ignore",
    "Bière qui roule n'amasse pas mousse",
    "J'te mets la p'tite sœur ?",
  ];
  var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    document.getElementById("joke").innerHTML = randomJoke;

}

// Function that randomly selects a way to say cheers from a local JSON and display it in the HTML
function displayCheers(url, parametre, successCallBack) {
  $.ajax({
    dataType: "json",
    url: "./cheers.json",
    success: function (cheers) {
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var item = cheers.countries[Math.floor(Math.random() * cheers.countries.length)];
      var second = now.getSeconds();
      if (second % 60 == 0) {
        document.getElementById("santé").innerHTML =
          "We say " +
          " « " +
          item.spelling +
          " » " +
          " in " +
          item.names[0] +
          " when we drink !" +
          "<br>Pronounce it this way: " +
          item.phonetics[0];
      } else {
        document.getElementById("santé").innerHTML =
          "We say " +
          " « " +
          item.spelling +
          " » " +
          " in " +
          item.names[0] +
          " when we drink !" +
          "<br>Pronounce it this way: " +
          item.phonetics[0];
      }
    },
  });
}

/* Adding a GIF */

let xhr = $.get("https://api.giphy.com/v1/gifs/random?api_key=OiOKipuQjatG66Aa7HT68nzNzvop8KzY&tag=alcohol&rating=g");
xhr.done(function(data) {
    $( "#source" ).attr( "src", data.data.embed_url);
    console.log("success got data", data);
})

function buttonClickGET() {
  let xhr = $.get("https://api.giphy.com/v1/gifs/random?api_key=OiOKipuQjatG66Aa7HT68nzNzvop8KzY&tag=alcohol&rating=g");
  xhr.done(function(data) {
      $( "#source" ).attr( "src", data.data.embed_url);
      console.log("success got data", data);
  })
}
