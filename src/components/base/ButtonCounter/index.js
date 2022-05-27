import React from 'react'

const Button = ({title, color, val1, val2, clickProps}) => {
  return (
   <button className='btn btn-primary' onClick={clickProps}>{title} - {val1 + val2}</button>
  )
}

export default Button