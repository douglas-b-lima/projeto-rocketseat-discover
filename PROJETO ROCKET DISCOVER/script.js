const html = document.documentElement;


function toggleMode() {
    

    html.classList.toggle('light');

    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) {
        img.setAttribute ('src', './assets/avatar-light.png');

        return;
    }
    
    img.setAttribute ('src', './assets/avatar.png');


}