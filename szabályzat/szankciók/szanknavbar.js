const toggleButton = document.getElementsByClassName('toggle-button')
[0]
const navbarlinks = document.getElementsByName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})

const szbtoggleButton = document.getElementsByClassName('szbtoggle-button')
[0]
const szbnavbarlinks = document.getElementsByName('szbnavbar-links')[0]

szbtoggleButton.addEventListener('click', () => {
    szbnavbarlinks.classList.toggle('active')
})