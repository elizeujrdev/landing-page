const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const img = document.getElementById('img')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');

    if (menu.classList.contains('ativo')) {

        img.style.display = 'none'

    } else {

        img.style.display = 'block'

    }
})
