// App.js
import React, { useState } from 'react';
import './App.css';

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  // Sample product data
  const products = [
    { id: 1, name: 'Organic Tomatoes', price: 3.99, category: 'vegetables', image: '🍅' },
    { id: 2, name: 'Fresh Apples', price: 2.49, category: 'fruits', image: '🍎' },
    { id: 3, name: 'Brown Rice', price: 4.99, category: 'grains', image: '🌾' },
    { id: 4, name: 'Farm Eggs', price: 5.49, category: 'dairy', image: '🥚' },
    { id: 5, name: 'Organic Milk', price: 6.99, category: 'dairy', image: '🥛' },
    { id: 6, name: 'Potatoes', price: 2.99, category: 'vegetables', image: '🥔' },
    { id: 7, name: 'Bananas', price: 1.49, category: 'fruits', image: '🍌' },
    { id: 8, name: 'Wheat Flour', price: 3.49, category: 'grains', image: '🌾' },
  ];

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
      <header className="header">
        <div className="logo">
          <h1>🌿 AgriFresh Market</h1>
          <p>Fresh from farm to table</p>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="cart-icon">
          <span>🛒 {cartCount}</span>
        </div>
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
          {filteredProducts.map(product => (
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

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>We connect local farmers with consumers, providing fresh, organic, and high-quality agricultural products. Our mission is to support sustainable farming while delivering the best produce to our customers.</p>
            <ul>
              <li>✅ 100% Organic Products</li>
              <li>✅ Direct from Farmers</li>
              <li>✅ Free Delivery over $50</li>
              <li>✅ 24/7 Customer Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h4>📍 Address</h4>
            <p>123 Farm Street, Agri City</p>
          </div>
          <div className="contact-item">
            <h4>📞 Phone</h4>
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-item">
            <h4>✉️ Email</h4>
            <p>info@agrifresh.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>AgriFresh Market</h4>
            <p>Fresh agricultural products delivered to your home</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <span>📘</span>
              <span>📷</span>
              <span>🐦</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AgriFresh Market. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;