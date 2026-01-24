import React, { useState, useEffect } from 'react';
import Login from '../Auth/Login.jsx';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './Cart.jsx' ;

const Home = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  const [products,setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        }
      });
  }, []);



  const categories = ['All', 'vegetables', 'fruits', 'grains', 'dairy'];

  const [filter, setFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(product => product.category === filter);

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    alert(`${product.name} added to cart!`);
  };


  return (
    <div className="app">
      {/* Header */}
      <header className="bg-black p-1 justify-between flex-row d-flex">
        <div>
          <h1 className="text-success">🌿 AgriFresh Market</h1>
          <p className='text-white'>Fresh from farm to table</p>
        </div>
        <nav className="flex-justify-between mx-5 text-white space-x-4 p-2">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button onClick={()=>{navigate('/login')}}>Login</button>
         </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h2>Farm Fresh Agricultural Products</h2>
          <p>Direct from local farmers to your doorstep</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="categories">
        <h3>Categories</h3>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="products-grid">
          {filteredProducts && filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="category">{product.category}</p>
              <button 
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h4> Address</h4>
            <p>12/40,Ram street,Kattankalathur,Chennai</p>
          </div>
          <div className="contact-item">
            <h4>📞 Phone</h4>
            <p>9977654321</p>
          </div>
          <div className="contact-item">
            <h4>✉️ Email</h4>
            <p>info@agrifresh.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;