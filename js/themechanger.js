

function redaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        document.body.classList.replace(current, "red-accent")
        localStorage.setItem("theme", "red-accent")
    } else {
        document.body.classList.add("red-accent")
        localStorage.setItem("theme", "red-accent")
    }

}

function normaltheme() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        document.body.classList.replace(current, "normal-accent")
        localStorage.setItem("theme", "normal-accent")
    } else {
        document.body.classList.add("normal-accent")
        localStorage.setItem("theme", "normal-accent") 
    }


}

function bluetheme() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        document.body.classList.replace(current, "blue-accent")
        localStorage.setItem("theme", "blue-accent")
    } else {
        document.body.classList.add("blue-accent")
        localStorage.setItem("theme", "blue-accent")
    }

}

