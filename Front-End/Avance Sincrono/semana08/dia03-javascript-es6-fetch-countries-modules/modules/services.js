// TODO: USAR la funcion usnado async/await

const url = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,languages,currencies,timezones,region'


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

export default fetchCountries