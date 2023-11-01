var gametag = window.location.search;
var urlparam = new URLSearchParams(gametag);
var header = document.getElementById("header");
var header2 = document.getElementById("header2");
var description = document.getElementById("description")
var description2 = document.getElementById("description2")
var blog = urlparam.get("blog");
console.log(blog)

if (blog === 'updates') {
    const header = document.getElementById("header");
    const header2 = document.getElementById("header2");
    const description = document.getElementById("description");
    const description2 = document.getElementById("description2");
    header.innerText = "Updates";
    description.innerHTML = "10/22/23 The work has started <br> <br> • added Nav bar <br> • cloaking <br>• and themes <br> • still trying to polish the themes <br> <br> 10/29/23 Sorry for no updates.  <br> <br> • New Games<br> • New Themes<br> • Light and Dark Mode <br> • I added a cloaker and about:blank (thanks syce) <br> • im working on new games and blogs. <br> <br> 10/30/23 <br> <br>• Changed Themes To Accents And Modes To Themes <br> <br> Halloween!! <br> <br> • I added New Games Including Fnaf 1, Fnaf 2, And Fnaf UCN <br> • I added 3 New Rammerhead Links And Added A Apps Page";

};
