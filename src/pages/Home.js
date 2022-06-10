import React, { useEffect, useState } from "react";
import {useSearchParams} from 'react-router-dom'
import Button from "../components/base/Button";
import Navbar from "../components/module/Navbar";

const Home = () => {
    const [search, setSearch] = useState('')
    let [searchParams, setSearchParams] = useSearchParams({});
    const handleSearch=()=>{
      // const api = process.env.REACT_APP_API_BACKEND
       setSearchParams({keyword: search})
    }
    useEffect(()=>{
        console.log('test');
    },[])
    // sudah selesai feature lgoin
  return (
    <div>
     <Navbar/>
      <h1>page home</h1>
      <p>{process.env.REACT_APP_API_BACKEND}</p>
      <input type="text" name="search" placeholder="search" onChange={(e)=>setSearch(e.target.value)} />
      
      <button onClick={handleSearch}>cari</button>
      <p>hasil pencarian adalah = {searchParams.get('keyword')}</p>
      <Button title="submit" onClick={()=>alert('helo')}>
        <span>
          hello
        </span>
        <p>
          world
        </p>
      </Button>
    </div>
  );
};

export default Home;
