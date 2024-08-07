import Product from '../../components/Product/Product';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import './Home.css';

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <div className='home'>
      <div className='home__container'>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <div>{error.data?.message || error.error}</div>
        ) : (
          <>
            <h1>Latest Products</h1>
            <div className='products'>
              {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))
              ) : (
                <div>No products available</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
