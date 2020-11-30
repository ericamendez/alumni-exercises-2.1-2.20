import axios from 'axios'
import { useEffect, useState } from 'react';

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

  const handleCountriesFilter = (e) => {
    let filteredCountries = Object.keys(countries).filter(country => {
      let countriesObject = countries[country].name || []

      return countriesObject.includes(e.target.value)
    })
    setInput(e.target.value)
    setFiltered(filteredCountries.map(country => countries[country]))
  }

  console.log(input);
  return (
    <div className="App">
      <p>Countries</p>
      <form>
        <input onChange={handleCountriesFilter} />
      </form>
      {filtered.length === 0 ? <p>No Results</p>
        : filtered.length <= 10 ? filtered.map((country) => <p>{country.name}</p>) 
        : input.length === 0 ? ''
        : <p>Search result too big</p>}
    </div>
  );
}

export default App;
