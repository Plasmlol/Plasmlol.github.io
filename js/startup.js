window.onload = function() {
    var icon = document.querySelector("link[rel='icon']");
    icon.type = "image.png";
    icon.rel = "icon";
    icon.href = localStorage.getItem("favicon");
    var favicon = localStorage.getItem("favicon");
    var title = localStorage.getItem("title")
    var accent = localStorage.getItem("accent")
    var themee = localStorage.getItem("themee")
    console.log(accent)
    console.log(themee)
    if (accent) {
        console.log(accent)
        console.log(themee)
        if (themee) {
            document.body.removeAttribute('class')
            document.body.classList.add(accent)
            document.body.classList.add(themee)
        } else {
            document.body.removeAttribute('class')
            document.body.classList.add(accent)
            document.body.classList.add('darktheme')
        }
    } else {
        if (themee) {
            document.body.removeAttribute('class')
            document.body.classList.add('normal-accent')
            document.body.classList.add(themee)
        } else {
            document.body.removeAttribute('class')
            document.body.classList.add('normal-accent')
            document.body.classList.add("darktheme")
        }
    }
    
    if (favicon) {
     console.log(favicon);
    } else {
        icon.href = "imgs/favicon.png"
    }
    if (title) {
     console.log(title);
     document.title = title
    } else {
        document.title = "Plasm - Grin"
    }

 
 }
