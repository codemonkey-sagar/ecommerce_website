/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ step1, step2, step3, step4 }) => {
  return (
    <div className='checkout-steps'>
      <div className={`checkout-steps__step ${step1 ? 'active' : 'disabled'}`}>
        {step1 ? (
          <Link to='/login' className='checkout-steps__link'>
            Sign In
          </Link>
        ) : (
          <span className='checkout-steps__link'>Sign In</span>
        )}
      </div>

      <div className={`checkout-steps__step ${step2 ? 'active' : 'disabled'}`}>
        {step2 ? (
          <Link to='/shipping' className='checkout-steps__link'>
            Shipping
          </Link>
        ) : (
          <span className='checkout-steps__link'>Shipping</span>
        )}
      </div>

      <div className={`checkout-steps__step ${step3 ? 'active' : 'disabled'}`}>
        {step3 ? (
          <Link to='/payment' className='checkout-steps__link'>
            Payment
          </Link>
        ) : (
          <span className='checkout-steps__link'>Payment</span>
        )}
      </div>

      <div className={`checkout-steps__step ${step4 ? 'active' : 'disabled'}`}>
        {step4 ? (
          <Link to='/placeorder' className='checkout-steps__link'>
            Place Order
          </Link>
        ) : (
          <span className='checkout-steps__link'>Place Order</span>
        )}
      </div>
    </div>
  );
};

export default Checkout;
