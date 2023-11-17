const url = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,languages,currencies,timezones'

// function fetchCountries(){
//   return fetch(url) // PROMISE
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }
  // TODO: USAR la funcion usnado async/await

const fetchCountries = async() => {
    try {
      const response = await fetch(url) // Promise

      // IDENTIFICAMOS SI LA RESPUESTA FUE CORRECTA
      if (!response.ok) {
        throw new Error('ERROR!!!',response.status)
      }

      const json = await response.json()

      return json

    } catch (error) {
      console.log(error)
    }
}

fetchCountries()
.then(data => console.log(data))
