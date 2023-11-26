// console.log('Hola modulos de Javascript')

import { renderPeliculas } from "./peliculas.js"
import { fetchPeliculas, createPelicula } from "./services.js"

const peliculasForm = document.getElementById('peliculasForm')

peliculasForm.addEventListener('submit', async (event) => {
    // De esta forma la pagina no recargara y por ende no se borraran los datos
    event.preventDefault()
    // console.log('Creando una nueva pelicula...')
    const peliculaForm = document.forms['peliculasForm']

    const nombre = peliculaForm.nombre.value
    const imagen = peliculaForm.imagen.value
    const estreno = peliculaForm.estreno.value
    const generoId = peliculaForm.genero.value
    const resumen = peliculaForm.resumen.value

    const nuevaPelicula = {
        nombre,
        imagen,
        estreno,
        generoId: Number(generoId),
        resumen
    }

    // console.log(nuevaPelicula)

    const response = await createPelicula(nuevaPelicula)

    console.log(response)

} )


document.addEventListener('DOMContentLoaded', async (event) => { 
    // Ejemplo usando promesas
    // fetchPeliculas()
    //     .then(peliculas => {
    //         console.log(peliculas)
    //         //RenderPeliculas(peliculas)
    //     })

    // Ejemplo usando async/await
    const peliculas = await fetchPeliculas()

    renderPeliculas(peliculas)
})