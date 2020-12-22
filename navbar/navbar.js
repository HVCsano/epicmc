const toggleButton = document.getElementsByClassName('toggle-button')
[0]
const navbarlinks = document.getElementsByName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})