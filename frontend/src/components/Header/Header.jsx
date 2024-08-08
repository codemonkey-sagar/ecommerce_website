import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import Logo from '../../assets/krishna-marbles-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faUser,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { logout } from '../../slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <img
          src={Logo}
          className='header__logo-img'
          alt='Krisna Marbles Logo'
        />
      </div>
      <nav className='header__nav'>
        <div className='container'>
          <ul className='header__navbar header__navbar--left'>
            <li className='header__navbar-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='header__navbar-item'>About</li>
            <li className='header__navbar-item'>Products</li>
            <li className='header__navbar-item'>Explore</li>
            <li className='header__navbar-item'>Project</li>
            <li className='header__navbar-item'>Contact</li>
          </ul>
          <ul className='header__navbar header__navbar--right'>
            <li className='header__navbar-item'>Search Product</li>
            <li className='header__navbar-item header__cart'>
              <Link to='/cart'>
                <FontAwesomeIcon icon={faCartShopping} />
                {cartItems.length > 0 && (
                  <span className='header__cart-count'>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </span>
                )}
              </Link>
            </li>
            <li className='header__navbar-item header__user'>
              {userInfo ? (
                <div className='header__user-dropdown'>
                  <span className='header__user-name'>
                    {userInfo.name}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className='header__user-caret'
                    />
                  </span>
                  <ul className='header__dropdown-menu'>
                    <li>
                      <Link to='/profile'>Profile</Link>
                    </li>
                    <li onClick={logoutHandler}>Logout</li>
                  </ul>
                </div>
              ) : (
                <Link to='/login' className='header__login'>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: '6px' }}
                  />
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
