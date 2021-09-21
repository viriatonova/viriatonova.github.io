
// TOGGLE SIDE BAR
const togglePage = document.querySelector('#togglePage');
const btmenu = document.querySelector('#btmenu');
const btclose = document.querySelector('#btclose');

btmenu.addEventListener('click', function () {
    togglePage.classList.toggle('hidden');
});