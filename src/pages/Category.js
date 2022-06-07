import React, { useEffect, useState } from "react";
import axios from "../configs/axios";
// import {useNavigate} from 'react-router-dom'

const Category = () => {
  const [category, setCategory] = useState([]);
  console.log("helo");
  // const navigate = useNavigate()

  async function fetchData(){
    try {
      const result = await axios({
        method: "GET",
        url: "/category",
      });
      setCategory(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    // axios
    //   .get("http://localhost:4000/v1/category")
    // axios({
    //   method: 'GET',
    //   baseURL: 'http://localhost:4000/v1',
    //   url: '/category'
    // })
    //   .then((res) => {
    //     // console.log(res.data.data);
    //     setCategory(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
   
    fetchData()
  }, []);

  const deleteCategory = (id)=>{
    axios.delete(`http://localhost:4000/v1/category/${id}`)
    .then(()=>{
      alert('delete success')
      fetchData()
      // navigate('/product')
    })
  }
  return (
    <div>
      <h1>page Product</h1>
      {category.map((item, index) => (
        <div className="card d-flex" key={index}>
          <div className="card-body">{item.name}</div>
          <button onClick={()=>deleteCategory(item.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default Category;
