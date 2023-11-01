var apptag = window.location.search;
var urlparam = new URLSearchParams(apptag);
var iframe = document.getElementById("myIframe");
var app = urlparam.get("app");
console.log(app)

if (app === 'appsuggestion') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSfsg2TKAfd3SQ3VL_Q3TkgbqMzILHFCLeGAI9MV5jcDSyzc1g/viewform?embedded=true"
    document.getElementById("a").innerHTML = "What Apps Should I add?";
    document.getElementById("b").innerHTML = "";
}

if (app === 'rammer1') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "https://rammerhead.urbigmumz.vilathea.ro/"
    document.getElementById("a").innerHTML = "Rammerhead Server 1";
    document.getElementById("b").innerHTML = "";
}

if (app === 'rammer2') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "https://froggy-are-cool.html.k4dm.net"
    document.getElementById("a").innerHTML = "Rammerhead Server 2";
    document.getElementById("b").innerHTML = "<style> display: none; </style>";
}

if (app === 'rammer3') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "https://joyridearoundthepark.5inas.cf/"
    document.getElementById("a").innerHTML = "Rammerhead Server 3";
    document.getElementById("b").innerHTML = "<style> display: none; </style>";
}


 
 
 
 
 
 
 
 
                
