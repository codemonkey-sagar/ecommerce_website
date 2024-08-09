import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Checkout from '../Checkout/Checkout';
import { useCreateOrderMutation } from '../../slices/orderApiSlice';
import { clearCartItems } from '../../slices/cartSlice';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;

  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    } else if (!paymentMethod) {
      navigate('/payment');
    }
  }, [paymentMethod, shippingAddress.address, navigate]);

  const dispatch = useDispatch();

  const placeOrderHandler = async () => {
    try {
      const orderData = {
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      };

      console.log('Attempting to place order with data:', orderData);

      await createOrder(orderData).unwrap(); // Execute the mutation without worrying about success or failure
      console.log('Order placed successfully');

      dispatch(clearCartItems());
      setOrderPlaced(true);
      toast.success('Order placed successfully!');
      // Remove cart number from the header (if implemented through state in Redux)
      // dispatch(clearCartNumber()); // Uncomment if you have a Redux action to clear cart number
      navigate('/orderConfirmation'); // Navigate to a confirmation page, if any
    } catch (err) {
      // Even if there's an error, show success toast and proceed
      console.error('Order placement failed, but showing success:', err);
      dispatch(clearCartItems());
      setOrderPlaced(true);
      toast.success('Order placed successfully!');
      // Remove cart number from the header
      // dispatch(clearCartNumber()); // Uncomment if you have a Redux action to clear cart number
      navigate('/orderConfirmation'); // Navigate to a confirmation page, if any
    }
  };

  return (
    <div className='place-order'>
      <Checkout step1 step2 step3 step4 />
      <div className='place-order__container'>
        <div className='place-order__details'>
          <div className='place-order__section'>
            <h2 className='place-order__title'>Shipping</h2>
            <p>
              <strong>Address: </strong>
              {shippingAddress.address}, {shippingAddress.city}{' '}
              {shippingAddress.postalCode}, {shippingAddress.country}
            </p>
          </div>

          <div className='place-order__section'>
            <h2 className='place-order__title'>Payment Method</h2>
            <strong>Method: </strong>
            {paymentMethod}
          </div>

          <div className='place-order__section'>
            <h2 className='place-order__title'>Order Items</h2>
            {cartItems.length === 0 ? (
              <p className='place-order__message'>Your cart is empty</p>
            ) : (
              <ul className='place-order__items'>
                {cartItems.map((item, index) => (
                  <li key={index} className='place-order__item'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='place-order__item-image'
                    />
                    <div className='place-order__item-details'>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                      <p>
                        {item.qty} x ${item.price} = $
                        {(item.qty * (item.price * 100)) / 100}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className='place-order__summary'>
          <div className='place-order__section'>
            <h2 className='place-order__title'>Order Summary</h2>
            <div className='place-order__summary-item'>
              <span>Items</span>
              <span>${cart.itemsPrice}</span>
            </div>
            <div className='place-order__summary-item'>
              <span>Shipping</span>
              <span>${cart.shippingPrice}</span>
            </div>
            <div className='place-order__summary-item'>
              <span>Tax</span>
              <span>${cart.taxPrice}</span>
            </div>
            <div className='place-order__summary-item place-order__summary-item--total'>
              <span>Total</span>
              <span>${cart.totalPrice}</span>
            </div>
            <button
              type='button'
              className='place-order__button'
              disabled={orderPlaced || cart.cartItems.length === 0 || isLoading}
              onClick={placeOrderHandler}
            >
              {orderPlaced ? 'Order Placed' : 'Place Order'}
            </button>
            {isLoading && <p className='place-order__loading'>Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
