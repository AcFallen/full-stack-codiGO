const divkeyCode = document.querySelector('.keycode')
const divCharacter = document.querySelector('.character')

document.addEventListener('keydown',function(event){
    console.log('>',event)
    console.log('>',event.key)
    console.log('>',event.keyCode)

    divkeyCode.textContent = event.keyCode
    divCharacter.textContent =event.key

})