import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Box from '../../components/module/Box'

const Counter = () => {
    const {count, email:emailGlo} = useSelector((state)=>state)
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const handleIncrement=()=>{
        const action = {
            type: 'INCREMENT'
        }
        dispatch(action)
    }

    const handleDecrement=()=>{
        dispatch({type: 'DECREMENT'})
    }

    const handleInputEmail =()=>{
        dispatch({type: 'CHANGE_EMAIL', payload: email})
        setEmail('')
    }
  return (
    <div>
        <h1>page counter</h1>
        <p>Email saya : {emailGlo}</p>
        <p>count : {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        <hr />
        <input placeholder='Masukan Email' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={handleInputEmail}>Input Email Baru</button>
        <hr />
        <Box/>
    </div>
  )
}

export default Counter