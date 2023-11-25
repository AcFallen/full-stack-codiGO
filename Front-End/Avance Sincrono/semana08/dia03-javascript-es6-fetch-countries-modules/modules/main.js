import {renderCountries, renderResults} from './utils.js'
import fetchCountries from './services.js'
import name from './constans.js'


let countryData = []

const searchInput = document.querySelector('.app__input')
const filterSelect = document.querySelector('.app__filter')

// function fetchCountries(){
//   return fetch(url) // PROMISE
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

searchInput.addEventListener('input', (event) => {
  const value = event.target.value
  const loweredValue = value.toLowerCase()

  
  const filteredCountries = countryData.filter(
    country => {
      const loweredName = country.name.common.toLowerCase()

      // TODO: Adicionalmente necesitamos filtrar a los paises por su capital
      const joinedCapitals = country.capital.join(',') // une todos los elementos de un arreglo en una cadena de texto
      const loweredCapitals = joinedCapitals.toLowerCase()

      return loweredName.includes(loweredValue) || loweredCapitals.includes(loweredValue) // true o false
    }
  )
  renderCountries(filteredCountries)
  renderResults(filteredCountries)

  // console.log(value)
})

filterSelect.addEventListener('input', (event) => {

  const value = event.target.value
  const loweredValue = value.toLowerCase()

  const filterCountriesByRegion =  countryData.filter(
    country => {
      const loweredRegion = country.region.toLowerCase()
      
      return loweredRegion.includes(loweredValue)
    }
  )

  renderCountries(filterCountriesByRegion)

})


document.addEventListener('DOMContentLoaded', async() =>{

  // console.log('Mi DOOM ya cargo!!')

  const data = await fetchCountries()

  countryData = data

  renderCountries(data)
})


