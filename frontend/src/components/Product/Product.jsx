import PropTypes from 'prop-types';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className='product'>
      <div className='product__image'>
        <Link to={`/product/${product._id}`} className='product__image-link'>
          <img
            src={product.image}
            alt={product.name}
            className='product__image-img'
          />
        </Link>
      </div>
      <div className='product__body'>
        <Link to={`/product/${product._id}`} className='product__name'>
          <strong>{product.name}</strong>
        </Link>
        <p className='product__description'>{product.description}</p>
        <h3 className='product__price'>{product.price}</h3>
        <button className='product__cta'>Add to Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default Product;
