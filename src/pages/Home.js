import React, { useEffect, useState } from "react";
import {useSearchParams} from 'react-router-dom'

const Home = () => {
    const [search, setSearch] = useState('')
    let [searchParams, setSearchParams] = useSearchParams({});
    const handleSearch=()=>{
       setSearchParams({keyword: search})
    }
    useEffect(()=>{
        console.log(searchParams.get('keyword'));
    },[searchParams])
  return (
    <div>
     
      <h1>page home</h1>
      <input type="text" name="search" placeholder="search" onChange={(e)=>setSearch(e.target.value)} />
      
      <button onClick={handleSearch}>cari</button>
      <p>hasil pencarian adalah = {searchParams.get('keyword')}</p>

    </div>
  );
};

export default Home;
