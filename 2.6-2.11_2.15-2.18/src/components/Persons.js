import React, { useState } from 'react'
import services from '../services'

const Persons = ({persons}) => {

  const[deletedContact, setDeletedContact] = useState('')

  const handleDelete = (id, name) => {
    if(window.confirm(`Do you want to delete "${name}"`)) {
      services
        .deleteContact(id)
        .then((res) => {
          setDeletedContact(`${name} was deleted`)
          console.log(deletedContact);
        })
    }
  }

  return (
    <div>
      {
        persons.map(person => {
          return (
            <div>
              <span>NAME: {person.name} NUMBER: {person.number}</span>
              <form onSubmit={() => handleDelete(person.id, person.name)}>
                <button type="submit">delete</button>
              </form>
            </div>
          )
        })
      }
    </div>
  )
}

export default Persons