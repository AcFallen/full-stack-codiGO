console.log('Hello world from index.js')

// Esto es un comentario en linea

/*
Esto es un comentario de
multiples 
lineas
*/

// TIPOS DE DATOS


// PRIMITIVOS: number, String, Boolean (true, false), undefined

// NUMBER

const number1 = 20
const number2 = 20.50
const number3 = -36

console.log(number1)
console.log(number2)
console.log(number3)

console.log(typeof number1)

// STRING

const alumna = 'Maria'

console.log(alumna)
console.log(typeof alumna)

// BOOLEAN

const bool = true;

console.log(bool)
console.log(typeof bool)

// UNDEFINED

let nombre
console.log(nombre)
console.log(typeof nombre)

// NULL

let apellido = null
console.log(apellido)

// ECMASCRIPT 6 === ES6

const edad = 26


// LET (el uso de let es recomendado)

let edad2 = 35

edad2 = 10

// OPERADORES MATEMATICOS

console.log(1+2)
console.log(1-2)
console.log(1*2)
console.log(1/2)
console.log(2**2) // potencia
console.log(1%2) // residuo


// OPERADORES DE COMPARACION

console.log(1 === 1)


// OTROS OPERADORES ,  siempre devuelven un booleano


// EJERCICIOS

// 1. Retorna true si dos string tienen la misma longitud si no devolver false

const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length === cadena2.length)

// 2. Retornar true si numero es menor de 40 si no devolver false

const numero = 1

console.log(numero<40)

//3. Retornar true si un numero es menor que 60 si no devolver false

const num3 = 40
console.log(num3<60)

//4. Retornar true si un numero es par si no devolver False

const num4 = 4
console.log((num4%2)==0)

//5. Retornar True si un numero es impar si no devolver False

const num5 = 7
console.log((num5%2)!=0)

//6. calcular el area de un triangulo y mostrar su resultado si tenemos valores base y altura

const base = 2
const altura = 6

console.log((base*altura)/2)

//7. Almacenar en una constante un numero de 3 cifras y mostrar la suma de sus cifras elevada al cubo

const numero3cifras = 444
const cadenanumero = numero3cifras.toString()

let array = []

for(i=0; i < cadenanumero.length;i++){
    array.unshift(parseInt(cadenanumero.charAt(i))) 
}

let suma = 0

for(i=0; i<array.length;i++){
    suma = suma + array[i]
}

let resultado = suma**3

console.log('resultado de la suma de digitos: ' + suma )
console.log('resultado de la potencia al cubo: ' + resultado)




// EJERCICIOS
  
// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10


// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

const miEdad = 18
if (miEdad > 17) {
    console.log('Mayor de edad')
}else{
    console.log('Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

const lenguaje = 'aimara' 

if (lenguaje === 'español' ) {
    console.log('Hola')
} else if(lenguaje === 'inglés') {
    console.log('Hello')
} else if (lenguaje === 'aimara'){
    console.log('kamisaraki')
}

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

const NumeroFizzBuzz = 15;

if(NumeroFizzBuzz%3 ===0 && NumeroFizzBuzz%5 ===0){
    console.log('FizzBuzz')
}
else if(NumeroFizzBuzz%3 === 0 ){
    console.log('Fizz')
}
else if( NumeroFizzBuzz%5 ===0){
    console.log('Buzz')
}
else {
    console.log(NumeroFizzBuzz)
}

// OBJETOS

const miObjeto = {
    nombre:'roberto',
    apellido:'apaza',
    colorFavorito:'verde'

}

// LEER CAMPOS DE LOS OBJETOS

console.log(miObjeto.nombre)

// SPREAD OPERATOR

 const producto = {
    nombre:'Laptop',
    precio:6800,
    categoria:'tech'
 }
 const cliente = {
    nombreCompleto: 'Claudia',
    isVip:true
 }


 console.log(producto + cliente)
 const nuevoObjeto = {...producto , ...cliente}