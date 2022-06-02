import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from '../../../configs/redux/actions/userAction'
import {useNavigate,} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoading} = useSelector((state)=>state.user)
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''

    })

    const handleChange = (e)=>{
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e)=>{
        e.preventDefault()
        dispatch(loginUser(formLogin, navigate))
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
        <ul>
            <li><input type="email" name="email" id="email" value={formLogin.email} onChange={handleChange} /></li>
            <li><input type="password" name="password" id="password" value={formLogin.password} onChange={handleChange} /></li>
        </ul>
        <button>{isLoading ? 'loading..': 'Login'}</button>
        </form>
    </div>
  )
}

export default Login