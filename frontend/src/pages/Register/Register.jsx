import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer/Form.jsx';
import { useRegisterMutation } from '../../slices/userApiSlice.js';
import { setCredentials } from '../../slices/authSlice.js';
import { toast } from 'react-toastify';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <FormContainer>
      <div className='login'>
        <form className='login__form' onSubmit={submitHandler}>
          <h1 className='login__title'>Register</h1>
          <div className='login__form-group'>
            <label htmlFor='email' className='login__label'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='login__input'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='login__form-group'>
            <label htmlFor='email' className='login__label'>
              Email Address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='login__input'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='login__form-group'>
            <label htmlFor='password' className='login__label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='login__input'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='login__form-group'>
            <label htmlFor='confirmPassword' className='login__label'>
              Confirm Password
            </label>
            <input
              type='password'
              name='password'
              id='confirmPassword'
              className='login__input'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='login__form-group'>
            <button
              type='submit'
              className='login__button'
              disabled={isLoading}
            >
              Register
            </button>

            {isLoading && 'Loading...'}
          </div>
        </form>
        <div className='login__register'>
          Already hav an account?{' '}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : '/login'}
            className='login__register-link'
          >
            login
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};

export default Register;
