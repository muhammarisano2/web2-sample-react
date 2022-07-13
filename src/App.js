import React, {useEffect,useState} from "react";
import Router from "./configs/router";
import {axiosInteceptorResponse, axiosInterceptorRequest} from './helper/common'



function App() {
  const [isConfig, setIsConfig] = useState(false)
  useEffect(()=>{
    axiosInteceptorResponse()
    axiosInterceptorRequest()
    setIsConfig(true)
  },[])
  return (
    isConfig && <Router/>
  );
}

export default App;
