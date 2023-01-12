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

var BBbtn = document.getElementById('breakingBadBtn');
var BBcountEl = document.getElementById('breakingBadCount');
var pastClicksBB = JSON.parse(localStorage.getItem('pastClicksBB')) || [];
var BBcounter = pastClicksBB.length;
BBcountEl.textContent = BBcounter;
BBbtn.addEventListener('click', function(){
    pastClicksBB.push('x');
    localStorage.setItem('pastClicksBB', JSON.stringify(pastClicksBB))
    var BBcounter = pastClicksBB.length;
    BBcountEl.textContent = BBcounter;
})

var DJbtn = document.getElementById('dadJokeBtn');
var DJcountEl = document.getElementById('dadJokeCount');
var pastClicksDJ = JSON.parse(localStorage.getItem('pastClicksDJ')) || [];
var DJcounter = pastClicksDJ.length;
DJcountEl.textContent = DJcounter;
DJbtn.addEventListener('click', function(){
    pastClicksDJ.push('x');
    localStorage.setItem('pastClicksDJ', JSON.stringify(pastClicksDJ))
    var DJcounter = pastClicksDJ.length;
    DJcountEl.textContent = DJcounter;
})


