const Persons = ({persons}) => {
  return (
    <div>
      {persons.map(person => <p>{person.name}</p>)}
    </div>
  )
}

export default Persons