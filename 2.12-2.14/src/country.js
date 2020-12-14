const Country = ({country}) => {

    const getLanguages = () => {
        let arr = []
        country.languages.forEach(lang => {
            arr.push(lang.name)
        });

        return arr
    }

    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <h3>Spoken Languages</h3>
            <ul>
                {country.languages? getLanguages().map(lang => <li>{lang}</li>): null}
            </ul>
        </div>
    )
}

export default Country