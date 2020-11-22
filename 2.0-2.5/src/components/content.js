import React from 'react'

const Content = ({parts}) => {
  return (
    <div>
      {
        parts.course.parts.map((part => {
          return (
            <p>
              {part.name}: {part.exercises}
            </p>
            )
        }))
      }
    </div>
  )
}

export default Content