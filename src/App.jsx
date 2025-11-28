import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Authentication/SignIn';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        {/* Placeholder for Home Page */}
        <Route path="/" element={
          <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
            <h1>PriceCompareX</h1>
            <p>Welcome to the live price comparison tool.</p>
            <a href="/signin" style={{ color: '#646cff' }}>Go to Sign In</a>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
