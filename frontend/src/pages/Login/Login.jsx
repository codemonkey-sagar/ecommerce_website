import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer/Form';
import { useLoginMutation } from '../../slices/userApiSlice.js';
import { setCredentials } from '../../slices/authSlice.js';
import { toast } from 'react-toastify';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

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
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <FormContainer>
      <div className='login'>
        <form className='login__form' onSubmit={submitHandler}>
          <h1 className='login__title'>Sign In</h1>
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
            <button
              type='submit'
              className='login__button'
              disabled={isLoading}
            >
              Sign In
            </button>

            {isLoading && 'Loading...'}
          </div>
        </form>
        <div className='login__register'>
          New Customer?{' '}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
            className='login__register-link'
          >
            Register
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};

export default Login;
