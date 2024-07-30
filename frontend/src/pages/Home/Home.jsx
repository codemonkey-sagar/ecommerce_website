import products from '../../data/products';
import Product from '../../components/Product/Product';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <h1>Latest Products</h1>
        <div className='products'>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
