const navelement = document.getElementById("navbarr2rs")

var navbar = `
<nav>
    <ul class="navcontainer">
    <img src="imgs/favicon.png" style=" width:50px; height: 50px;">
        <h1 class="name">Plasm</h1>
        <li class="navlist" style="height: 15%;"><a href="index.html"><button class="navbutton">Home</button></a></li>
        <li class="navlist" style="height: 15%;"><a href="games.html"><button class="navbutton">Games</button></a></li>
        <li class="navlist" style="height: 15%;"><button class="navbutton">Apps</button></li>
        <li class="navlist" style="height: 15%;"><button class="navbutton">Socials</button></li>
        <li class="navlist" style="height: 15%;"><a href="settings.html"><button class="navbutton">Options</button></a></li>
        <li class="navlist" style="height: 15%;"><a href="updates.html"><button class="navbutton">Updates</button></a></li>
    </ul>
</nav>
`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", navbar)


//it will work trust 💯, ts dont work

