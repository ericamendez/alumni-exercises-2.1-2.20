import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newSearch, setNewSearch] = useState('')
  
  const handleInput = (e) => {
    switch (e.target.name) {
      case "name":
        setNewName(e.target.value)
        break;
      case "number":
        setNewNumber(e.target.value)
        break;
      case "search":
        setNewSearch(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleAddPerson = (e) => {
    e.preventDefault()
    if (Object.keys(persons).some(person => persons[person].name === newName)) {
      alert(`The name ${newName} already exists in the phonebook`)
    } else {
      let newPersonObj = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPersonObj))
    }
  }

  const getFilteredPersons = () => {
    let filteredIndex = Object.keys(persons).filter(person => persons[person].name.toLowerCase().includes(newSearch.toLowerCase()))

    return filteredIndex.map(person => persons[person])
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <span>Search: <input name="search" onChange={handleInput} /></span>
      <h2>Add New Person</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input name="name" onChange={handleInput} />
        </div>
        <div>
          number: <input name="number" onChange={handleInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {getFilteredPersons().map(person => <p>{person.name}</p>)}
    </div>
  )
}

export default App