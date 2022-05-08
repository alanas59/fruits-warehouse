import React from 'react';
import './Home.css';

import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Supports from '../Supports/Supports';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Supports></Supports>
        </div>
    );
};

export default Home;