import { Link } from 'react-router-dom';
import './ConfirmOrder.css';

const ConfirmOrder = () => {
  return (
    <div className='confirm-order'>
      <div className='confirm-order__container'>
        <h1 className='confirm-order__title'>Thank You for Your Order!</h1>
        <p className='confirm-order__message'>
          Your order has been successfully placed. We will send you a
          confirmation email shortly.
        </p>
        <Link to='/' className='confirm-order__home-link'>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ConfirmOrder;
