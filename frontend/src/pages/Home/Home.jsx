import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../../components/Product/Product';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='home'>
      <div className='home__container'>
        <h1>Latest Products</h1>
        <div className='products'>
          {Array.isArray(products) ? (
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
