import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import services from './services'
import Notification from './components/Notifcation'

const App = () => {
  const [persons, setPersons] = useState({})
  useEffect(() => {
    services
      .getAll()
      .then((response) => {
        const data = response.data
        setPersons(data)
      })
  }, [])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newSearch, setNewSearch] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')
  
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
    let updateId = ''
    let newPersonObj = {
      name: newName,
      number: newNumber
    }

    if (Object.keys(persons).some(person => {
      if (persons[person].name === newName){
        updateId = persons[person].id
      }
      return persons[person].name === newName
    })) {
      if(window.confirm(`The name ${newName} already exists in the phonebook`)){
        services
          .updateContact(updateId, newPersonObj)
          .then((res) => {
            console.log(res);
          })
      }
      
    } else {

      services
        .createContact(newPersonObj)
        .then(res => {
          setPersons(persons.concat(res.data))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setErrorMessage(`Error adding contact`)
        })
    }
  }

  const getFilteredPersons = () => {
    let filteredIndex = Object.keys(persons).filter(person => persons[person].name.toLowerCase().includes(newSearch.toLowerCase()))

    return filteredIndex.map(person => persons[person])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Filter handleInput={handleInput} />
      <h2>Add New Person</h2>
      <PersonForm 
        handleAddPerson={handleAddPerson} 
        handleInput={handleInput}
      />
      <h2>Numbers</h2>
      <Persons persons={getFilteredPersons()} />
    </div>
  )
}

export default App