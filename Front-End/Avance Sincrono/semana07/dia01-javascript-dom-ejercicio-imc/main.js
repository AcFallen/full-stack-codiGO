// console.log('Hola mundo')

const inputPeso = document.querySelector('#inputPeso')
const inputAltura = document.querySelector('#inputAltura')
const btnCalcular = document.querySelector('#btnCalcular')
const divResultado = document.querySelector('#resultado')


btnCalcular.addEventListener('click',function(event){
    // console.log(event.target)

    // Recogiendo valores de las cajas de texto
    const peso = inputPeso.value
    const altura = inputAltura.value

    console.log(peso,altura)

    const indiceDeMasaCorporal = peso / Math.pow(altura/100,2)

    console.log(indiceDeMasaCorporal)

    let resultado = ''

    if (indiceDeMasaCorporal < 18.5){
        resultado = 'Baja'
    } else if (indiceDeMasaCorporal >= 18.5 && indiceDeMasaCorporal <=24.9){
        resultado = 'Normal'
    } else if (indiceDeMasaCorporal > 25 && indiceDeMasaCorporal <= 29.9){
        resultado = 'Sobrepeso'
    } else if (indiceDeMasaCorporal > 30) {
        resultado = 'Obeso'
    } else {
        resultado = 'Datos incorrectos'
    }

    console.log(resultado)

    //To fixed puede quitar los decimales a un numero
    
    divResultado.textContent = 'Tu indice de masa corporal es ' + resultado + ' con ' + indiceDeMasaCorporal.toFixed(2)
})