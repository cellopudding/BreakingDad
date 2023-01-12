var breakingBadBtn = document.getElementById("breakingBadBtn")
var dadJokeBtn = document.getElementById("dadJokeBtn")

// BREAKING BAD API

function getApi() { 
    var requestUrl = 'https://api.breakingbadquotes.xyz/v1/quotes'

fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data[0].quote)
        document.getElementById('textGenerate').innerHTML = '"' + data[0].quote + '"' + " - " + data[0].author
})
    
}
    
breakingBadBtn.addEventListener("click", getApi );





// // DAD JOKE API
function getDadApi() { 
    var requestUrl = 'https://icanhazdadjoke.com/'

fetch(requestUrl, {
    headers: {
        Accept: "application/json"
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        document.getElementById('textGenerate').innerHTML = data.joke
}).catch(function (data) {
    console.log(data)
})
    
}
    
dadJokeBtn.addEventListener("click", getDadApi );

