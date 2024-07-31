import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, adjustQuantity } = useContext(CartContext);

  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div>No items in the cart</div>
      ) : (
        cart.map((item) => (
          <div key={item._id} className='cart-item'>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <input
              type='number'
              value={item.quantity}
              onChange={(e) =>
                adjustQuantity(item._id, parseInt(e.target.value))
              }
            />
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
