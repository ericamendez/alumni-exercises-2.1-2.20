import React from 'react'
import Header from './header'
import Content from './content'
import Total from './total'

const Course = (props) => {
  return (
    <div>
      <Header course={props} />
      <Content parts={props} />
      <Total parts={props} />
    </div>
  )
}

export default Course