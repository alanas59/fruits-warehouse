import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/fruits')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    return (
        <div>
            <h2>Inventory;{products.length}</h2>
        </div>
    );
};

export default Products;