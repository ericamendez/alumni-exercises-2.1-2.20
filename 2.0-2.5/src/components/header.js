import React from 'react'

const Header = ({course}) => {
  console.log(course);
  return (
    <div>
      <h1>{course.course.name}</h1>
    </div>
  )
}

export default Header