import React, { useEffect, useState } from 'react';

const Fruits = () => {
    const [fruits,setFruits] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/fruits')
        .then(res => res.json())
        .then(data => setFruits(data));
    },[]);
    return (
        <div>
            <h2>Inventory;{fruits.length}</h2>
        </div>
    );
};

export default Fruits;