import React from 'react'
import {useParams, useNavigate, useLocation} from 'react-router-dom'

const DetailProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

  return (
      <div>
          <h1>DetailProduct page</h1>
          <p>product id =  {id}</p>
          <button onClick={()=>navigate('/')}>kembali ke home</button>
      </div>
  )
}

export default DetailProduct