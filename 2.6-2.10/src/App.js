import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import PersonForm from './components/PersonsForm'

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
      <Filter handleInput={handleInput} />
      <h2>Add New Person</h2>
      < PersonsForm 
        handleAddPerson={handleAddPerson} 
        handleInput={handleInput}
      />
      <h2>Numbers</h2>
      <Persons persons={getFilteredPersons()} />
    </div>
  )
}

export default App