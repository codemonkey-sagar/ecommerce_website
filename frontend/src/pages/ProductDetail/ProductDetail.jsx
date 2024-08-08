import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../../slices/productsApiSlice';
import { addToCart } from '../../slices/cartSlice';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        ...product,
        qty,
      })
    );
    navigate('/cart');
  };

  return (
    <div className='productDetail'>
      <nav className='breadcrumb'>
        <Link to='/'>Home</Link> / <span>{product?.name || 'Loading...'}</span>
      </nav>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        product && (
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
              <p className='productDetail__description'>
                {product.description}
              </p>
              <div className='productDetail__rating'>
                Rating: {product.rating} ({product.numReviews} reviews)
              </div>
              <div className='productDetail__stock'>
                {product.countInStock > 0
                  ? `In Stock: ${product.countInStock}`
                  : 'Out of Stock'}
              </div>
              {product.countInStock > 0 && (
                <div>
                  <p>Quantity</p>
                  <select onChange={(e) => setQty(Number(e.target.value))}>
                    {[...Array(product.countInStock).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <button
                className='productDetail__addToCart'
                disabled={product.countInStock === 0}
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetail;
