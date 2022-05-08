import React from 'react';
import './Home.css';

import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Supports from '../Supports/Supports';
import Story from '../Story/Story';
import Loading from '../../Shared/Loading/Loading';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Story></Story>
            <Products></Products>
            <Supports></Supports>
            
        </div>
    );
};

export default Home;