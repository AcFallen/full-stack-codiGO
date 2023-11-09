console.log('hola')

const taskImput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList =  document.querySelector('.task__list')

taskAdd.addEventListener('click',function(event){
    // Se ejecutara cuando hagamos click en el boton "Anadir tarea"

    // Creando un boton en HTML desde JS
    // const button = document.createElement('button')
    // button.textContent = 'Hola soy un boton'
    // document.body.appendChild(button)

    if (taskImput.value != ''){
        const li = document.createElement('li')
        const checkbox = document.createElement('input')

        checkbox.setAttribute('type','checkbox')
        li.appendChild(checkbox)

        const span = document.createElement('span')
        span.textContent = taskImput.value
        li.appendChild(span)

        
        taskList.appendChild(li)
       
    
        taskImput.value = ''
    }

})



// taskAdd.addEventListener('click',function(event){
//     // Se ejecutara cuando hagamos click en el boton "Anadir tarea"

//     // Creando un boton en HTML desde JS
//     // const button = document.createElement('button')
//     // button.textContent = 'Hola soy un boton'
//     // document.body.appendChild(button)

//     if (taskImput.value != ''){
//         const li = document.createElement('li')
//         li.textContent = taskImput.value
//         taskList.appendChild(li)
    
//         taskImput.value = ''
//     }

// })