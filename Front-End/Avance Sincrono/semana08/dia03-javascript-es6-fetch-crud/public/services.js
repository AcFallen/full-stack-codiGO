export const fetchPeliculas = async () => {
    // Forma de relacionar dos END-POINTS entre las peliculas y sus generos
    const url = 'http://localhost:3000/peliculas?_expand=genero'

    const response = await fetch(url) //Por defecto se usa el metodo GET

    const data = await response.json()

    return data
}

export const createPelicula = async (form) => {
    const url = 'http://localhost:3000/peliculas'

    const body = JSON.stringify(form)

    // ???
    const options = {
        method: 'POST', // Nos permite crear un nuevo registro
        headers: {
            'Content-type': 'application/json'//MINETYPES
        },
        body
    }

    const response = await fetch(url, options)

    const data = await response.json()

    return data
}
