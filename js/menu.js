const open_menu = document.querySelector('#open_menu')
const close_menu = document.querySelector('#close_menu')
const misc = document.querySelector('#misc')

const header = document.querySelector('header')
const hr = document.querySelector('hr')
const content = document.querySelector('#content')

open_menu.addEventListener('click', () => {
    misc.classList.add('open')
    header.classList.add('blur')
    hr.classList.add('blur')
    content.classList.add('blur')
})
close_menu.addEventListener('click', () => {
    misc.classList.remove('open')
    header.classList.remove('blur')
    hr.classList.remove('blur')
    content.classList.remove('blur')
})