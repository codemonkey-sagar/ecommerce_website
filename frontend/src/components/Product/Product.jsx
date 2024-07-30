import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className='product'>
      <div className='product__image'>
        <a href={`/product/${product._id}`} className='product__image-link'>
          <img
            src={product.image}
            alt={product.name}
            className='product__image-img'
          />
        </a>
      </div>
      <div className='product__body'>
        <a href={`/product/${product._id}`} className='product__name'>
          <strong>{product.name}</strong>
        </a>
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
