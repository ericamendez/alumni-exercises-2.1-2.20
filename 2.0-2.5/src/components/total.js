import React from 'react'

const Total = ({parts}) => {
  return (
    <div>
      <p>
        Number of exercises: {' '}
        {
          parts.course.parts.reduce((acc, part) => {
            return acc + part.exercises
          }, 0 )
        }
      </p>
    </div>
  )
}

export default Total