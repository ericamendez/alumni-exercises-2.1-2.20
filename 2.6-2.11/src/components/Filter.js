const Filter = ({handleInput}) => {
  return (
    <div>
      <span>Search: <input name="search" onChange={handleInput} /></span>
    </div>
  )
}

export default Filter