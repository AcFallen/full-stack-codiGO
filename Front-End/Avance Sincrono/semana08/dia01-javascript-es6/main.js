console.log('Hola Js')

// FUNCIONES

// FUNCIONES SIN PARAMETROS

function nonbreDeLaFuncion(){
  console.log('Hola a todos')
}

nonbreDeLaFuncion() // Esta ejecutandose la funcion

function suma(numero1 , numero2){
  console.log(numero1 + numero2)
}

suma(4,6)

// Funciones sin parametros con retorno de datos

function multiplicacion(numero1,numero2){
  return numero1*numero2
}

const resultadoDemultiplicacion = multiplicacion(5,6)
console.log(resultadoDemultiplicacion)


// Funcion  con parametros con retorno de datos

function resta(numero1,numero2){
  return numero1-numero2
}

const resultadoResta = resta(5,6)
console.log(resultadoResta)

// ARROW FUNCTIONS

const inprimiendoSaludo = () => console.log('Hola a todos nuevamente!!')

inprimiendoSaludo()

// Funcion con parametros

const otraSuma = (numero1,numero2) => console.log(numero1 + numero2)

otraSuma(4,2)

// Funciones con parametros con retorno de datos

const otraMultiplicacion = (numero1,numero2) => numero1 * numero2

console.log(otraMultiplicacion(4,4))

// Funciones sin parametros con retorno de datos

const saludoEnMayusculas= (nombre) => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'hola ' + nombreEnMayusculas + '!!'
}

console.log(saludoEnMayusculas('Fany'))


// PARAMETROS REST

const numeros = [4,10]

function miSuma (n1,n2){
  return n1 + n2
}

console.log(miSuma(...numeros))


const listaDeNumeros = [6,33,998,1,-66,453]

console.log(Math.max(...listaDeNumeros)) 
console.log(Math.min(...listaDeNumeros)) 


// Spread operator (...) Sirve para expandir los parametros de un arreglo, llamadas a funciones incluso Objetos

const frutas = ['manzanas','Naranjas','Platanos','Sandia','Duraznos']
const frutasYVerduras = ['Papas','Cebollas',...frutas]

console.log(frutas)
console.log(frutasYVerduras)



const persona = {
  nombre : 'juan',
  apellido :'apaza',
  edad :37
}

const stack = {
  javascript:'React.js',
  python:'Django',
  nodejs:'ExpressJS'
}

const personaYSusStacks = {
  ...persona,
  ...stack
} 

console.log(personaYSusStacks)