import './Header.css';
import Logo from '../../assets/krishna-marbles-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
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
            <li className='header__navbar-item'>Home</li>
            <li className='header__navbar-item'>About</li>
            <li className='header__navbar-item'>Products</li>
            <li className='header__navbar-item'>Explore</li>
            <li className='header__navbar-item'>Project</li>
            <li className='header__navbar-item'>Contact</li>
          </ul>
          <ul className='header__navbar header__navbar--right'>
            <li className='header__navbar-item'>Search Product</li>
            <li className='header__navbar-item'>
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
            <li className='header__navbar-item'>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '6px' }} />
              Login
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
