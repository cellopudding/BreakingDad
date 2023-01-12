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

