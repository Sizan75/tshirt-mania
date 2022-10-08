import React from 'react';
import { ToastContainer } from 'react-toastify';
import './Tshirt.css'

const Tshirt = ({tshirt, handleBuyNow}) => {
    const {name, picture,price}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button onClick={()=>handleBuyNow(tshirt)} className='btn-buy-now'>Buy Now</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Tshirt;