import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { addToCart, removeFromCart } from '../../slices/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFormCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate(`/login?redirect=/shipping`);
  };

  return (
    <div className='cart_container'>
      <h1>Shopping Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p className='message'>
            Your cart is empty.
            <Link to='/'>Go to Home Page</Link>
          </p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>
                  <Link to={`/product/${item._id}`}>{item.name}</Link>
                </p>
                <p>Rs. {item.price}</p>
                <p>
                  {item.countInStock > 0 && (
                    <div>
                      <p>Quantity</p>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </p>
                <p>
                  <button onClick={() => removeFormCartHandler(item._id)}>
                    Delete
                  </button>
                </p>
              </div>
            ))}
          </div>
        )}

        <div>
          <h2>
            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
            items
          </h2>
          <div>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </div>
          <button disabled={cartItems.length === 0} onClick={checkoutHandler}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
