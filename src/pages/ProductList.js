import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import styles from './product.module.css'
import Card from '../components/Card'

const ProductList = () => {
    const [product, setProduct] = useState("")
    const [products, setProducts] = useState([])
    const handleChange = (e)=>{
        setProduct(e.target.value)
    }
    const handleSimpan =()=>{
        setProducts([
            product,
            ...products,
        ])
        setProduct("")
    }
    return (
    <div>
        <h2>Product List</h2>
        <div className={styles.wrapperInput}> 
            <Input type="text" placeholder="product" id="product" name="product" label="product" value={product} onChange={handleChange}/>
            <Button title="Simpan" onClick={handleSimpan}/>
        </div>
        {products.map((item)=>(
            <Card content={item} />
        ))}
    </div>
  )
}

export default ProductList