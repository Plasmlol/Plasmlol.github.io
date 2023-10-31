

function redaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (localStorage.getItem('themee') === 'lighttheme') {
            document.body.removeAttribute('class');
            document.body.classList.add("red-accent")
            document.body.classList.add("lighttheme")
            localStorage.setItem("accent", "red-accent")
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("red-accent")
            localStorage.setItem("accent", "red-accent")
        }

    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("red-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "red-accent")
    }

}

function normalaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (localStorage.getItem('themee') === 'lighttheme') {
            document.body.removeAttribute('class');
            document.body.classList.add("normal-accent")
            document.body.classList.add("lighttheme")
            localStorage.setItem("accent", "normal-accent")
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("normal-accent")
            localStorage.setItem("accent", "normal-accent")
        }
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("normal-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "normal-accent")
    }

}

function blueaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (localStorage.getItem('themee') === 'lighttheme') {
            document.body.removeAttribute('class');
            document.body.classList.add("blue-accent")
            document.body.classList.add("lighttheme")
            localStorage.setItem("accent", "blue-accent")
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("blue-accent")
            localStorage.setItem("accent", "blue-accent")
        }
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("blue-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "blue-accent")
    }

}

function yellowaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (localStorage.getItem('themee') === 'lighttheme') {
            document.body.removeAttribute('class');
            document.body.classList.add("yellow-accent")
            document.body.classList.add("lighttheme")
            localStorage.setItem("accent", "yellow-accent")
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("yellow-accent")
            localStorage.setItem("accent", "yellow-accent")
        }
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("yellow-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "yellow-accent")
    }

}

function light() {
    if (localStorage.getItem('accent')) {
        localStorage.setItem("themee", "lighttheme")
        document.body.removeAttribute('class')
        document.body.classList.add(localStorage.getItem('accent'))
        document.body.classList.add(localStorage.getItem('themee'))
        console.log(localStorage.getItem("mode"))
    } else {
        localStorage.setItem("themee", "lighttheme")
        document.body.removeAttribute('class')
        document.body.classList.add("normal-accent")
        document.body.classList.add(localStorage.getItem('themee'))
    }
}

function dark() {
    if (localStorage.getItem('accent')) {
        localStorage.setItem("themee", "darktheme")
        document.body.removeAttribute('class')
        document.body.classList.add(localStorage.getItem('accent'))
        document.body.classList.add(localStorage.getItem('themee'))
        console.log(localStorage.getItem("themee"))
    } else {
        localStorage.setItem("themee", "darktheme")
        document.body.removeAttribute('class')
        document.body.classList.add("normal-accent")
        document.body.classList.add(localStorage.getItem('themee'))
    }

}



