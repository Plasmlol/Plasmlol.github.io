window.onload = function() {
    var icon = document.querySelector("link[rel='icon']");
    icon.type = "image.png";
    icon.rel = "icon";
    icon.href = localStorage.getItem("favicon");
    var favicon = localStorage.getItem("favicon");
    var title = localStorage.getItem("title")
    var theme = localStorage.getItem("theme")
    var mode = localStorage.getItem("mode")
    console.log(theme)
    console.log(mode)
    if (theme) {
        console.log(mode)
        console.log(theme)
        if (mode) {
            document.body.removeAttribute('class')
            document.body.classList.add(theme)
            document.body.classList.add(mode)
        } else {
            document.body.removeAttribute('class')
            document.body.classList.replace("root", "normal-accent")
            document.body.classList.add('normal-accent')
            document.body.classList.add('darkmode')
        }
    } else {
        if (mode) {
            document.body.removeAttribute('class')
            document.body.classList.add('normal-accent')
            document.body.classList.add(mode)
        } else {
            document.body.removeAttribute('class')
            document.body.classList.add('normal-accent')
            document.body.classList.add("darkmode")
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
