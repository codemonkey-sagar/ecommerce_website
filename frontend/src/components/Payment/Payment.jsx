import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../FormContainer/Form';
import Checkout from '../Checkout/Checkout';
import { savePaymentMethod } from '../../slices/cartSlice';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [navigate, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState('Card');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <div className='payment'>
      <FormContainer>
        <Checkout step1 step2 step3 />
        <h1 className='payment__title'>Payment Method</h1>
        <form onSubmit={submitHandler} className='payment__form'>
          <div className='payment__form-group'>
            <label className='payment__label' htmlFor='card'>
              Select Method
            </label>
            <div className='payment__input-group'>
              <input
                type='radio'
                id='card'
                name='paymentMethod'
                value='Card'
                checked={paymentMethod === 'Card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className='payment__input'
              />
              <label
                htmlFor='card'
                className='payment__label payment__label--radio'
              >
                Card Payment
              </label>
            </div>
          </div>

          <button type='submit' className='payment__button'>
            Continue
          </button>
        </form>
      </FormContainer>
    </div>
  );
};

export default Payment;
