const open_menu = document.querySelector('#open_menu')
const close_menu = document.querySelector('#close_menu')
const misc = document.querySelector('#misc')

const header = document.querySelector('header')
const hr = document.querySelector('hr')
const content = document.querySelector('#content')

let open = false

open_menu.addEventListener('click', _menu)

close_menu.addEventListener('click', _menu)

header.addEventListener('click', _menu)

hr.addEventListener('click', _menu)

content.addEventListener('click', _menu)

function _menu() {
    if (open == false){
        setTimeout(() => {
            misc.classList.add('open')
            header.classList.add('blur')
            hr.classList.add('blur')
            content.classList.add('blur')

            console.log(open)
            return open = true
        },10)
    } else if (open == true) {
        setTimeout(() => {
            misc.classList.remove('open')
            header.classList.remove('blur')
            hr.classList.remove('blur')
            content.classList.remove('blur')

            console.log(open)
            return open = false
        },10)
    }
}
