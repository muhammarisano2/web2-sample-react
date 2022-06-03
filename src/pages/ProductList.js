import React, { useState } from 'react'
import Button from '../components/base/Button'
import Input from '../components/base/Input'
import styles from './product.module.css'
import Card from '../components/module/Card'

const ProductList = () => {
    const [product, setProduct] = useState("")
    const [products, setProducts] = useState([])
    // const handleChange = (e)=>{
    //     setProduct(e.target.value)
    // }
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
            <Input type="text" placeholder="product" id="product" name="product" value={product} onChange="product"/>
            <Button onClick={handleSimpan}>simpan</Button>
        </div>
        {products.map((item)=>(
            <Card content={item} />
        ))}
    </div>
  )
}

export default ProductList