import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Added Item:{cart.length }</h1>
        </div>
    );
};

export default Cart;