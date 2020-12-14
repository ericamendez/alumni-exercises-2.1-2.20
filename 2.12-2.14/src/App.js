import axios from 'axios'
import { useEffect, useState } from 'react';
import Country from './country'

function App() {

  let hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        setCountries(res.data)
      })
  }

  const [countries, setCountries] = useState({})
  useEffect(hook, [])

  const [filtered, setFiltered] = useState({})
  const [input, setInput] = useState('')
  const [selectedCountry, setSelectedCountry] = useState({})

  const handleCountriesFilter = (e) => {
    let filteredCountries = Object.keys(countries).filter(country => {
      let countriesObject = countries[country].name || []

      return countriesObject.includes(e.target.value)
    })
    setInput(e.target.value)
    setFiltered(filteredCountries.map(country => countries[country]))
  }

  const getShow = (e) => {
    let selectedCountryIndex = Object.keys(filtered).filter(country => {
      let countriesObject = filtered[country].name || []
      console.log(countriesObject);
      return countriesObject.includes(e.target.parentNode.innerText.slice(0, -4))
    })

    console.log(e.target.parentNode.innerText.slice(0,-4));
    setSelectedCountry(filtered[selectedCountryIndex[0]])

    // return (
    //   <Country country={filtered[selectedCountryIndex[0]]} />
    // )
  }

  return (
    <div className="App">
      <p>Countries</p>
      <form>
        <input onChange={handleCountriesFilter} />
      </form>
      {filtered.length === 0 ? <p>No Results</p>
        : filtered.length === 1 ? filtered.map((country) => <Country country={country} />)
        : filtered.length <= 10 ? filtered.map((country) => {
            return (
              <div>
                <span>{country.name}</span>
                <button onClick={getShow}>show</button>
                {Object.keys(selectedCountry).length !== 0  ? <Country country={selectedCountry} /> : null}
              </div>
            )
        }) 
        : input.length === 0 ? ''
        : <p>Search result too big</p>}
    </div>
  );
}

export default App;
