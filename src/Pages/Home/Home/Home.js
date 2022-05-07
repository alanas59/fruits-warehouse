import React from 'react';
import './Home.css';

import Banner from '../Banner/Banner';
import Fruits from '../Fruits/Fruits';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Fruits></Fruits>
        </div>
    );
};

export default Home;