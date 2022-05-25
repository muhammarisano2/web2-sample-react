import React from 'react'

const Button = ({title, onClick}) => {
  return (
    <button className='btn btn-secondary' onClick={onClick}>{title}</button>
  )
}

export default Button