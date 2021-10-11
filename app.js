function menuOpen() {
    let mega = document.querySelector(".mega-menu");
    let menu = document.querySelector(".menu");
    mega.classList.toggle("add-display");
    menu.classList.toggle("add-display");
}

function searchMenu1(event) {
    event.preventDefault();
    let searchMenu = document.querySelector(".search-menu");
    searchMenu.classList.toggle("add-search");
    
    
}