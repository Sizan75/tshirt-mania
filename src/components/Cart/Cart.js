import React from 'react';

const Cart = ({cart , handleRemove}) => {
    return (
        <div>
            <h1>Added Item:{cart.length }</h1>
            {cart.map(tshirt => <p
            key={tshirt._id}>
                {tshirt.name}
                <button onClick={() => handleRemove(tshirt)}>X</button>
            </p>
            )
            }
        </div>
    );
};

export default Cart;