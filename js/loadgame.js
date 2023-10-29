var gametag = window.location.search;
var urlparam = new URLSearchParams(gametag);
var iframe = document.getElementById("myIframe");
var game = urlparam.get("game");
console.log(game)

if (game === 'cookieclicker') {
const iframe = document.getElementById("myIframe")
iframe.src = "games/cookie clicker/index.html"
document.getElementById("a").innerHTML = "You should try this irl";
document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
console.log(gametag)
}
if (game === 'jeffbezosiszaddy') {
const iframe = document.getElementById("myIframe")
iframe.src = "games/youarejeffbezos/index.html"
document.getElementById("a").innerHTML = "Would this be lucky to wake up as jeff bezos of be unluckey because of how much you need to manage";
document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
console.log(gametag)
}

if (game === 'gamesuggestion') {
const iframe = document.getElementById("myIframe")
iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSchrbawkZ2bWN8tb1lyYlC3Q31FgICqMzyFRiP7JNwsoEm9YA/viewform?embedded=true"
iframe.style ="background-color: white;"
document.getElementById("a").innerHTML = "What Games should I add to plasmV2";
}


if (game === 'drivemad') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/drive-mad/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("a").innerHTML = "Become a monster truck";
    document.getElementById("b").innerHTML = "Controls: <br>A: Back<br> B: Forward"
}
 
if (game === 'riddleschool1') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/riddleschool/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("a").innerHTML = "Fun fact the creator made this game in 4th grade";
    document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
}
 
if (game === 'riddleschool2') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/riddleschool2/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("a").innerHTML = "Again we try to escape school";
    document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
}
 
if (game === 'riddleschool3') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/riddleschool3/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("a").innerHTML = "Made it to High School!!";
    document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
}
 
if (game === 'riddleschool4') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/riddleschool4/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("a").innerHTML = "Ha Ha Ha Ha";
    document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
}
 
if (game === 'riddleschool5') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/riddleschool5/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("a").innerHTML = "It was all fake??";
    document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
}
 
if (game === 'riddletransfer1') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/riddletransfer/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("a").innerHTML = "How did we get here";
    document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
}

if (game === 'riddletransfer2') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/riddletransfer2/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("a").innerHTML = "Real...";
    document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
}

if (game === 'worldshardestgame') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/worlds-hardest-game/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("text").innerHTML = "What Games should I add to plasmV2";
}

if (game === 'worldshardestgame2') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "games/worlds-hardest-game-2/index.html"
    iframe.style ="background-color: white;"
    document.getElementById("text").innerHTML = "What Games should I add to plasmV2";
}
 
 
                
