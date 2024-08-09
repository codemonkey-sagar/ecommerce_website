import { useState } from 'react';
import FormContainer from '../../components/FormContainer/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../../slices/cartSlice';
import './Shipping.css';

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress?.address || '');
  const [city, setCity] = useState(shippingAddress?.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress?.country || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/payment');
  };

  return (
    <FormContainer>
      <div className='shipping'>
        <h1 className='shipping__title'>Shipping Address</h1>
        <form className='shipping__form' onSubmit={submitHandler}>
          <div className='shipping__form-group'>
            <label htmlFor='address' className='shipping__label'>
              Address
            </label>
            <input
              type='text'
              name='address'
              id='address'
              className='shipping__input'
              placeholder='Enter Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='shipping__form-group'>
            <label htmlFor='city' className='shipping__label'>
              City
            </label>
            <input
              type='text'
              name='city'
              id='city'
              className='shipping__input'
              placeholder='Enter City'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className='shipping__form-group'>
            <label htmlFor='postalCode' className='shipping__label'>
              Postal Code
            </label>
            <input
              type='text'
              name='postalCode'
              id='postalCode'
              className='shipping__input'
              placeholder='Enter Postal Code'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className='shipping__form-group'>
            <label htmlFor='country' className='shipping__label'>
              Country
            </label>
            <input
              type='text'
              name='country'
              id='country'
              className='shipping__input'
              placeholder='Enter Country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className='shipping__form-group'>
            <button type='submit' className='shipping__button'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </FormContainer>
  );
};

export default Shipping;
