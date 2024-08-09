import React, { useState } from 'react';
import { FaEdit, FaPlus, FaTrash, FaSave } from 'react-icons/fa';
import './Products.css';

const Products = () => {
  // Initial static data
  const initialProducts = [
    {
      _id: '1',
      name: 'Sample Product 1',
      price: 100,
      category: 'Sample Category 1',
      brand: 'Sample Brand 1',
    },
    {
      _id: '2',
      name: 'Sample Product 2',
      price: 200,
      category: 'Sample Category 2',
      brand: 'Sample Brand 2',
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    brand: '',
  });

  // CRUD Operations

  // Create Product
  const createProductHandler = () => {
    const newProduct = {
      _id: (products.length + 1).toString(),
      name: 'New Product',
      price: 0,
      category: 'New Category',
      brand: 'New Brand',
    };
    setProducts([...products, newProduct]);
  };

  // Delete Product
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((product) => product._id !== id));
    }
  };

  // Start Editing Product
  const startEditHandler = (product) => {
    setEditingProduct(product._id);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      brand: product.brand,
    });
  };

  // Save Edited Product
  const saveEditHandler = (id) => {
    const updatedProducts = products.map((product) =>
      product._id === id ? { ...product, ...formData } : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  // Handle Form Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='products column-direction'>
      <div className='products__header'>
        <button className='products__create-btn' onClick={createProductHandler}>
          <FaPlus className='products__create-icon' /> Create Product
        </button>
      </div>

      <div className='products__table-container'>
        <table className='products__table'>
          <thead className='products__thead'>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className='products__tbody'>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className='products__row'>
                  <td className='products__cell'>{product._id}</td>
                  {editingProduct === product._id ? (
                    <>
                      <td className='products__cell'>
                        <input
                          type='text'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </td>
                      <td className='products__cell'>
                        <input
                          type='number'
                          name='price'
                          value={formData.price}
                          onChange={handleChange}
                        />
                      </td>
                      <td className='products__cell'>
                        <input
                          type='text'
                          name='category'
                          value={formData.category}
                          onChange={handleChange}
                        />
                      </td>
                      <td className='products__cell'>
                        <input
                          type='text'
                          name='brand'
                          value={formData.brand}
                          onChange={handleChange}
                        />
                      </td>
                      <td className='products__cell'>
                        <button
                          className='products__save-btn'
                          onClick={() => saveEditHandler(product._id)}
                        >
                          <FaSave />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className='products__cell'>{product.name}</td>
                      <td className='products__cell'>${product.price}</td>
                      <td className='products__cell'>{product.category}</td>
                      <td className='products__cell'>{product.brand}</td>
                      <td className='products__cell'>
                        <div className='products__actions'>
                          <button
                            className='products__edit-btn'
                            onClick={() => startEditHandler(product)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteHandler(product._id)}
                            className='products__delete-btn'
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))
            ) : (
              <tr className='products__row'>
                <td className='products__cell' colSpan='6'>
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
