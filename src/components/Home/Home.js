import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tshirts= useLoaderData()
   const [cart, setCart] = useState([]);
    const handleBuyNow= tshirt => {
      const exists = cart.find(ts => ts._id === tshirt._id);
      if(exists){
        toast.error("You already parchhased it !!", { duration: 4000,
        position: 'top-center'});
    }else{
        const newCart=[...cart, tshirt]
        setCart(newCart);
        toast.success("Thanks for parchhase :)", { duration: 4000,
            position: 'top-center'});
    }
        }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleBuyNow= {handleBuyNow}
                ></Tshirt> )
                }
            </div>
            <div className='cart-container'>
                <Cart
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;