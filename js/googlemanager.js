var googlemanager = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6LFD3WLKPJ"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-6LFD3WLKPJ');
    </script>
`
document.querySelector("#gomanager").insertAdjacentHTML("afterbegin", googlemanager)