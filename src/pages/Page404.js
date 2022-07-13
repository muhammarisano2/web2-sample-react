import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()
  const [file, setFIle] = useState({
    file: null,
    preview: ''
  })
  const [search, setSearch] = useState('')

  const handleChangeFile =(e)=>{
    setFIle({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0])
    })
  }
  const handleSearch=()=>{
    navigate({pathname: '/login', search: '?search='+search})
  }
  return (
    <div>
      <h1>page not foutn</h1>
      <img src={file.preview} alt="preview" />
      <input type="file" accept="image/png, image/jpeg" onChange={handleChangeFile} />
      <input type="text" placeholder='search product' onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={handleSearch}>search</button>
    </div>
  )
}

export default Page404