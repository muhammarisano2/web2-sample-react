import React, { useState, useEffect } from "react";
import "./counter.css";
import styles from './counter.module.css'

const Counter = () => {
  // let count = 0
  const [count, setCount] = useState(0);
  const [count2x, setCount2x] = useState(0)
  const [formValue, setFormValue] = useState({
      name: '',
      email: '',
      password: ''
  })
  const handleIncrement = (val) => {
    setCount(count + val);
  };
  const handleDecrement = (val) => {
    setCount(count - val);
  };

//   useEffect(()=>{
//     alert('selamat datang bro..')
//   }, [])

  useEffect(()=>{
    // alert('selamat datang bro..')
    setCount2x(count * 2)
  }, [])

  return (
    <div className="wrapper">
      <h1>feature counter</h1>
      <h4>hasil 2x dari count = {count2x}</h4>
      <div className={styles['counter-blue']}>
        <button onClick={() => handleDecrement(5)}>-</button>
        <p>{count}</p>
        <button onClick={() => handleIncrement(5)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
