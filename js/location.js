const li_about = document.querySelector('#li_about')
const li_characteristics = document.querySelector('#li_characteristics')
const li_genetics = document.querySelector('#li_genetics')
const li_discussion = document.querySelector('#li_discussion')

const about = document.querySelector('#about')
const characteristics = document.querySelector('#characteristics')
const genetics = document.querySelector('#genetics')
const discussion = document.querySelector('#discussion')

li_about.addEventListener('click', () => {
    window.scrollTo(0, 0)
    
    about.style.display = 'block'
    characteristics.style.display = 'none'
    genetics.style.display = 'none'
    discussion.style.display = 'none'

    // Menu style
    li_about.classList.add('selected')
    li_characteristics.classList.remove('selected')
    li_genetics.classList.remove('selected')
    li_discussion.classList.remove('selected')
})

li_characteristics.addEventListener('click', () => {
    window.scrollTo(0, 0)
    
    about.style.display = 'none'
    characteristics.style.display = 'block'
    genetics.style.display = 'none'
    discussion.style.display = 'none'

    // Menu style
    li_about.classList.remove('selected')
    li_characteristics.classList.add('selected')
    li_genetics.classList.remove('selected')
    li_discussion.classList.remove('selected')
})

li_genetics.addEventListener('click', () => {
    window.scrollTo(0, 0)
    
    about.style.display = 'none'
    characteristics.style.display = 'none'
    genetics.style.display = 'block'
    discussion.style.display = 'none'

    // Menu style
    li_about.classList.remove('selected')
    li_characteristics.classList.remove('selected')
    li_genetics.classList.add('selected')
    li_discussion.classList.remove('selected')
})

li_discussion.addEventListener('click', () => {
    window.scrollTo(0, 0)
    
    about.style.display = 'none'
    characteristics.style.display = 'none'
    genetics.style.display = 'none'
    discussion.style.display = 'block'

    // Menu style
    li_about.classList.remove('selected')
    li_characteristics.classList.remove('selected')
    li_genetics.classList.remove('selected')
    li_discussion.classList.add('selected')
})

// Config
characteristics.style.display = 'none'
genetics.style.display = 'none'
discussion.style.display = 'none'
