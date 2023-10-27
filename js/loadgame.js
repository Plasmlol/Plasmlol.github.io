var gametag = window.location.search;
var iframe = document.getElementById("myIframe")

if (gametag === '?game=cookieclicker') {
const iframe = document.getElementById("myIframe")
iframe.src = "games/cookie clicker/index.html"
document.getElementById("a").innerHTML = "You should try this irl";
document.getElementById("b").innerHTML = "Controls: <br> Just click lil bro";
console.log(gametag)
}
if (gametag === '?game=jeffbezosiszaddy') {
const iframe = document.getElementById("myIframe")
iframe.src = "games/youarejeffbezos/index.html"
document.getElementById("text").innerHTML = "Would this be lucky to wake up as jeff bezos of be unluckey because of how much you need to manage";
console.log(gametag)
}

if (gametag === '?game=fleeingthecomplex') {
const iframe = document.getElementById("myIframe")
iframe.src = "games/fleeingthecomplex/index.html"
document.getElementById("text").innerHTML = "ok what the flip";
}

                