import React, {useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./product.module.css";
import {getProduct} from '../../configs/redux/actions/productAction'


const Product = () => {
const [page, setPage] = useState({
    currentPage: 1,
    limit: 6,
    sort: '',
    search: ''

})
const [count, setCount] = useState(0)
const increment =()=>{
    setCount(count + 1)
}
const decrement = ()=>{
    setCount(count - 1)
}
const increment3kali =()=>{
    setCount((curent)=>curent + 1)
    setCount((curent)=>curent + 1)
    setCount((curent)=>curent + 1)
}
  const { data, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProduct({
        page: page.currentPage,
        limit: page.limit,
        sort: page.sort, 
        search: page.search
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page])
  return (
    <div>
      <div className={styles.container}>
        <h1>page product</h1>
        <div>
            <select name="sort" id="sort" value={page.sort} onChange={(e)=>{setPage({...page, sort: e.target.value})}}>
            <option value=""> - </option>
                <option value="byPrice">harga terendah</option>
                <option value="byName">A-Z</option>
            </select>
        </div>
        <div className={styles.wrapperCard}>
            {isLoading && <h1>loading.....</h1>}
          { data && data.map((product) => (
            <div className={styles.card}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>{product.price}</h4>
            </div>
          ))}
        </div>
        <br />
        <div>
            <button   onClick={()=>setPage((current)=>({...current, currentPage: 1}))}>1</button>
            <button  onClick={()=>setPage({...page, currentPage: 2})}>2</button>
            <button  onClick={()=>setPage({...page, currentPage: 3})}>3</button>
            <button  onClick={()=>setPage({...page, currentPage: 4})}>4</button>
        </div>
      </div>
      <h1>nilai count = {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={increment3kali}>increment 3X</button>
    </div>
  );
};

export default Product;
