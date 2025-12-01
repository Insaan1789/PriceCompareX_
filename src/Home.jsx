import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css'; // Ensure styles are applied

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery) {
            alert('Search functionality coming soon! You searched for: ' + searchQuery);
        }
    };

    return (
        <div className="home-container">
            <nav className="navbar glass">
                <div className="logo">
                    <img
                        src={logo}
                        alt="PriceCompareX"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }}
                    />
                    <span>PriceCompareX</span>
                </div>
                <div className="nav-links">
                    <a href="#" className="active">Home</a>
                    <a href="#">Deals</a>
                    <a href="#">Trending</a>
                    <Link to="/signin" className="btn-primary">Login</Link>
                </div>
            </nav>

            <header className="hero">
                <div className="hero-content">
                    <h1 className="animate-fade-up">Find the <span className="gradient-text">Lowest Price</span><br />Every Single Time.
                    </h1>
                    <p className="animate-fade-up delay-1">Compare prices across thousands of stores, track history, and get smart
                        buy recommendations.</p>

                    <div className="search-container glass animate-fade-up delay-2">
                        <i className="fas fa-search search-icon"></i>
                        <input
                            type="text"
                            placeholder="Search for products (e.g., iPhone 15, Sony XM5)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="btn-search" onClick={handleSearch}>Search</button>
                    </div>

                    <div className="hero-stats animate-fade-up delay-3">
                        <div className="stat-item">
                            <span className="stat-number">10M+</span>
                            <span className="stat-label">Products</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Stores</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Real-time Updates</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="floating-card glass card-1">
                        <div className="card-icon"><i className="fas fa-tag"></i></div>
                        <div className="card-info">
                            <span>Best Deal</span>
                            <strong>$999 <span className="strike">$1200</span></strong>
                        </div>
                    </div>
                    <div className="floating-card glass card-2">
                        <div className="card-icon"><i className="fas fa-chart-line"></i></div>
                        <div className="card-info">
                            <span>Price Drop</span>
                            <strong>-15% Today</strong>
                        </div>
                    </div>
                    <div className="glow-effect"></div>
                </div>
            </header>

            <section className="features">
                <h2 className="section-title">Why Use PriceCompareX?</h2>
                <div className="features-grid">
                    <div className="feature-card glass">
                        <div className="icon-box"><i className="fas fa-bolt"></i></div>
                        <h3>Real-time Comparison</h3>
                        <p>Instantly compare prices from Amazon, BestBuy, Walmart, and more in one click.</p>
                    </div>
                    <div className="feature-card glass">
                        <div className="icon-box"><i className="fas fa-history"></i></div>
                        <h3>Price History</h3>
                        <p>View historical price charts to know if it's the right time to buy or wait.</p>
                    </div>
                    <div className="feature-card glass">
                        <div className="icon-box"><i className="fas fa-bell"></i></div>
                        <h3>Smart Alerts</h3>
                        <p>Set price targets and get notified instantly when your favorite products go on sale.</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2025 PriceCompareX. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
