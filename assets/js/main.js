const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', () => {
    document.querySelector('nav ul').classList.add('show')
    console.log('open')
})
closeBtn.addEventListener('click', () => {
    document.querySelector('nav ul').classList.remove('show')
    console.log('close');
})