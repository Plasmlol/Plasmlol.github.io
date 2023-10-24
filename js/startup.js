window.onload = function() {
    var icon = document.querySelector("link[rel='icon']");
    icon.type = "image.png";
    icon.rel = "icon";
    icon.href = localStorage.getItem("favicon");
    var favicon = localStorage.getItem("favicon");
    var title = localStorage.getItem("title")
    var theme = localStorage.getItem("theme")
    if (theme) {
        console.log(theme)
        document.body.classList.replace("root", theme)
    }
    if (favicon) {
     console.log(favicon);
    }
    if (title) {
     console.log(title);
     document.title = title
    }
    location.reload()

 
 }
