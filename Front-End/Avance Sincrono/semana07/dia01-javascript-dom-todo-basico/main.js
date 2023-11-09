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

        const button = document.createElement('button')
        button.textContent = 'Borrar'
        li.appendChild(button)

        // TODO: Anadir un boton al li con el texto borrar y al hacer click en el boton que se elimine la fila de la tarea

        
        taskList.appendChild(li)
       
    
        taskImput.value = ''


    } else {
        alert('El campo es requerido')
        return
    }

})

taskList.addEventListener('click',function(event){
    
    const target = event.target

    if(target.tagName === 'Input' && target.type === 'checkbox'){
        target.classList.toggle('completed')
    }

    // Eliminar un tarea de la lista en especifico
    
    if(target.tagName === 'BUTTON'){
        target.parentElement.remove()
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