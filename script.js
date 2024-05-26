const hamburgerIcon = document.querySelector('.hamburger')
const navContent = document.querySelector('.navigation')
const crossIcon = document.querySelector('.cross-icon')

hamburgerIcon.addEventListener('click', () => {
    navContent.classList.add('menu-open')
})

crossIcon.addEventListener('click', () => {
    navContent.classList.remove('menu-open')
})