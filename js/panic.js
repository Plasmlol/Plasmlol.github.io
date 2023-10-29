var setting = localStorage.getItem("panickey") 
console.log(setting)

document.addEventListener('keydown', function(event) {
    if (setting) {
        if (event.key === setting || event.key === setting) {
            // Redirect to Google Drive URL
            window.location.href = 'https://drive.google.com/';
        }
    } else {
        if (event.key === 'p' || event.key === 'p') {
            // Redirect to Google Drive URL
            window.location.href = 'https://drive.google.com/';
        }
    }
});