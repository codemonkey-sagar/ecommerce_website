import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      console.log(response);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

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
