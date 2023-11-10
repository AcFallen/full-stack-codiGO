console.log('hola js')

let tasks = [] //Aqui almacenamos las tareas

const taskInput = document.querySelector('.task__input')  // Es la representacion de un input desde JavaScript
const taskList = document.querySelector('.task__list')

// console.log(taskInput)
// console.log(taskList)

taskInput.addEventListener('keypress',function(event){
  // Logica de la aplicacion

  if(event.key === 'Enter'){
    const input = event.target
    const value = input.value

    // Creando objeto que contendra una tarea
    const newtask = {
      title: value,
      done: false
    }
    // console.log(newtask)
    tasks.push(newtask)

    taskInput.value = ''
    renderTasks()
  }

})

// Funcion para subrayar el contenido de las tareas

function checktask(event,currentIndex){
  
  // TODO: Hacer que el todo se tache usando solo JavaScript
  const checkboxSelected = event.target
  const liParent = checkboxSelected.parentElement
  liParent.classList.toggle('isChecked')

  const taskSelected = tasks[currentIndex]
  taskSelected.done = !taskSelected.done

  console.log(tasks)

}

// Logica para el boton de Borrar
function removeTask(event, currentIndex){
  console.log('Eliminando el indice',currentIndex)
  event.target.parentElement.remove()

  const newTasks = tasks.filter((task,index) => index !== currentIndex )
  tasks = newTasks

  console.log(newTasks)
  
  renderTasks()
}

// Funcion para renderizar o pintar los objetos creados

function renderTasks(){
  // console.log('Dibujando las tareas')
  let list = ''
  // vamos a recorrer el arreglo de tareas
  tasks.forEach(function(task,index){
    list = list + `
    <li class="task__item">
    <input type="checkbox" onchange="checktask(event,${index})">
    <span class="task__text">${task.title}</span>
    <button onclick="removeTask(event,${index})">Borrar</button>
    </li>
    `
  })
  // console.log(list)

  taskList.innerHTML = list
}





// taskInput.addEventListener('keypress',function(event){
//   // Logica de la aplicacion

//   if(event.key === 'Enter'){


//     const li = document.createElement('li')
//     const checkbox = document.createElement('input')

//     checkbox.setAttribute('type','checkbox')
//     li.appendChild(checkbox)

//     const span = document.createElement('span')
//     span.textContent = taskInput.value
//     li.appendChild(span)

//     const button = document.createElement('button')
//         button.textContent = 'Borrar'
//         li.appendChild(button)

//     taskList.appendChild(li)

//     taskInput.value = ''

//   }

// })












