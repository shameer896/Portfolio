function toggleMenu() {
    const menu=document.querySelector('.menu-link')
    const icon=document.querySelector('.hamburger-icon')
    icon.classList.toggle("open")
    menu.classList.toggle("open")
}