

function redaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (localStorage.getItem('mode') === 'lightmode') {
            document.body.removeAttribute('class');
            document.body.classList.add("red-accent")
            document.body.classList.add("lightmode")
            localStorage.setItem("theme", "red-accent")
        } else {
            document.body.classList.add("darkmode")
        }

    } else {
        document.body.classList.add("red-accent")
        localStorage.setItem("theme", "red-accent")
    }

}

function normaltheme() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (localStorage.getItem('mode') === 'lightmode') {
            document.body.removeAttribute('class');
            document.body.classList.add("normal-accent")
            document.body.classList.add("lightmode")
            localStorage.setItem("theme", "normal-accent")
        } else {

        }
    } else {
        document.body.classList.add("normal-accent")
        localStorage.setItem("theme", "normal-accent")
    }

}

function bluetheme() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (localStorage.getItem('mode') === 'lightmode') {
            document.body.removeAttribute('class');
            document.body.classList.add("blue-accent")
            document.body.classList.add("lightmode")
            localStorage.setItem("theme", "blue-accent")
        } else {

        }
    } else {
        document.body.classList.add("blue-accent")
        localStorage.setItem("theme", "blue-accent")
    }

}

function light() {
        localStorage.setItem("mode", "lightmode")
        document.body.removeAttribute('class')
        document.body.classList.add(localStorage.getItem('theme'))
        document.body.classList.add(localStorage.getItem('mode'))
        console.log(localStorage.getItem("mode"))
}

function dark() {
        localStorage.setItem("mode", "darkmode")
        document.body.removeAttribute('class')
        document.body.classList.add(localStorage.getItem('theme'))
        document.body.classList.add(localStorage.getItem('mode'))
        console.log(localStorage.getItem("mode"))

}



