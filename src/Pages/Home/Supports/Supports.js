import React, { useEffect, useState } from 'react';
import Support from '../Support/Support';

const Supports = () => {
    const [supports,setSupports] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/supports')
        .then(res => res.json())
        .then(data => setSupports(data));
    },[])
    return (
        <div className='my-4'>
            <h2 className='text-center'>Our Services</h2>
            <div className='row'>
              {
                  supports.map(support => <Support
                  key={support._id}
                  support={support}
                  ></Support>)
              }
            </div>
        </div>
    );
};

export default Supports;