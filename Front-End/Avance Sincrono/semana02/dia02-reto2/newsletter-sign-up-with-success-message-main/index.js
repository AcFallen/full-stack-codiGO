const form = document.querySelector('form')
const button = document.querySelector('.dismiss')
const container = document.querySelector('.container')
const container2 = document.querySelector('.container-2')
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    container.classList.add('hide')
    container2.classList.remove('hide')
})

button.addEventListener("click",() =>{
    container2.classList.add('hide')
    container.classList.remove('hide')
})

