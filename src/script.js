const dark = document.querySelector('#dark');
const html = document.querySelector('html');
const sunIcon = document.getElementById(' sun-icon');
const moonIcon = document.getElementById('moon-icon');


dark.addEventListener('click', () => {
    html.classList.toggle('dark');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
})