const openMenuButton = document.getElementById('open-menu');
const slidingMenu = document.getElementById('sliding-menu');

openMenuButton.addEventListener('click', () => {
    if (slidingMenu.style.right === '0px') {
        slidingMenu.style.right = '-250px';
    } else {
        slidingMenu.style.right = '0px';
    }
});