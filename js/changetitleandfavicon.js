const favicon = document.querySelector("link[rel='icon']")



function Slides() {
    favicon.setAttribute("href", "/imgs/icons/Slides.png");
    localStorage.setItem("favicon", "imgs/icons/Slides.png");
    localStorage.setItem("title", "Google Slides");
    document.title = localStorage.getItem("title");
    
}

function Googledrive() {
    favicon.setAttribute("href", "/imgs/icons/Drive.png");
    localStorage.setItem("favicon", "imgs/icons/Drive.png")
    localStorage.setItem("title", "Google Drive - My Drive");
    document.title = localStorage.getItem("title");
    
}

function reset() {
    favicon.setAttribute("href", "imgs/favicon.png");
    localStorage.setItem("favicon", "imgs/favicon.png")
    localStorage.setItem("title", "Plasm - Grin");
    document.title = localStorage.getItem("title");
    
}

function Schoology() {
    favicon.setAttribute("href", "imgs/icons/Schoology.png");
    localStorage.setItem("favicon", "imgs/icons/Schoology.png")
    localStorage.setItem("title", "Schoology");
    document.title = localStorage.getItem("title");
    
}

function Studentvue() {
    favicon.setAttribute("href", "imgs/icons/Studentvue.png");
    localStorage.setItem("favicon", "imgs/icons/Studentvue.png")
    localStorage.setItem("title", "Student Vue");
    document.title = localStorage.getItem("title");
    
}

function Google() {
    favicon.setAttribute("href", "imgs/icons/Google.png");
    localStorage.setItem("favicon", "imgs/icons/Google.png")
    localStorage.setItem("title", "Google");
    document.title = localStorage.getItem("title");
    
}

function Googledocs() {
    favicon.setAttribute("href", "imgs/icons/Googledocs.png");
    localStorage.setItem("favicon", "imgs/icons/Googledocs.png")
    localStorage.setItem("title", "Google Docs");
    document.title = localStorage.getItem("title");
    
}




