import { useParams, Link } from 'react-router-dom';
import products from '../../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='productDetail'>
      <nav className='breadcrumb'>
        <Link to='/'>Home</Link> / <span>{product.name}</span>
      </nav>
      <div className='productDetail__container'>
        <div className='productDetail__image'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='productDetail__info'>
          <h1 className='productDetail__name'>{product.name}</h1>
          <p className='productDetail__brand'>Brand: {product.brand}</p>
          <p className='productDetail__category'>
            Category: {product.category}
          </p>
          <p className='productDetail__price'>Price: {product.price}</p>
          <p className='productDetail__description'>{product.description}</p>
          <div className='productDetail__rating'>
            Rating: {product.rating} ({product.numReviews} reviews)
          </div>
          <div className='productDetail__stock'>
            {product.countInStock > 0
              ? `In Stock: ${product.countInStock}`
              : 'Out of Stock'}
          </div>
          <button className='productDetail__addToCart'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
