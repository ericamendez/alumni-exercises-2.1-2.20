const PersonForm = ({handleInput, handleAddPerson}) => {
  return (
    <div>
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
    </div>
  )
}

export default PersonForm