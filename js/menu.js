let menuToggle = document.getElementById('menu-toggle')
let menu = document.getElementById('menu-list')

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('expanded') 
});