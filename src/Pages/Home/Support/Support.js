import React from 'react';

const Support = props => {
    const {support} = props;
    const {name,img,description} = support;
    return (
        <div className='col-lg-3  text-center my-4'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Support;