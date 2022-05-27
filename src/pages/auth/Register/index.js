import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [fullname, setFullname] = useState('')
    const navigate = useNavigate()
    const [dataRegister, setDataRegister] = useState({
        email: '',
        password: '',
        fullname: ''
    })

    const handleChange =(e)=>{
        setDataRegister({
            ...dataRegister,
            [e.target.name]: e.target.value
        })
    }
    const handleRegister =(e)=>{
        e.preventDefault()
        axios.post('https://tokoku-web2.herokuapp.com/v1/users/register', dataRegister)
        .then((res)=>{
            console.log(res.data);
            navigate('/login')
        })
        .catch((e)=>{
            // console.log(e);
            // console.log(e.response.data.message);
            alert(e.response.data.message)
        })
     
    }
  return (
    <form onSubmit={handleRegister}>
        <ul>
            <li>
            <input type="email" name="email" value={dataRegister.email} placeholder='email' onChange={handleChange} />
            </li>
            <li>
            <input type="password" name="password" value={dataRegister.password} placeholder='password' onChange={handleChange} />
            </li>
            <li>
            <input type="text" name="fullname" value={dataRegister.fullname} placeholder='fullname' onChange={handleChange} />
            </li>
        </ul>
        <button type='submit'>Register</button>
        
    </form>
  )
}

export default Register