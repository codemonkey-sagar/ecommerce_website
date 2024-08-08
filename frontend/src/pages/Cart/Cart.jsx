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

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate(`/login?redirect=/shipping`);
  };

  return (
    <div className='cart_container'>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='message'>
          Your cart is empty. <Link to='/'>Go to Home Page</Link>
        </p>
      ) : (
        <div className='cart_content'>
          <div className='cart_items'>
            {cartItems.map((item) => (
              <div key={item._id} className='cart_item'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='cart_item_image'
                />
                <div className='cart_item_details'>
                  <Link to={`/product/${item._id}`} className='cart_item_name'>
                    {item.name}
                  </Link>
                  <p className='cart_item_price'>Rs. {item.price}</p>
                  {item.countInStock > 0 && (
                    <div className='cart_item_qty'>
                      <label htmlFor={`qty-${item._id}`}>Quantity</label>
                      <select
                        id={`qty-${item._id}`}
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
                </div>
                <button
                  className='cart_item_delete'
                  onClick={() => removeFromCartHandler(item._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className='cart_summary'>
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
            <div className='cart_summary_total'>
              Rs.{' '}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </div>
            <button
              className='cart_summary_button'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
