const hamburger = document.querySelector('.hamburger')
const dropdown = document.querySelector('.nav-dropdown')

hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('hide');
    hamburger.classList.toggle('change-grey')
})