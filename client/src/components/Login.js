import React, { useState } from 'react';
// Import Axios at the top of your component
import axios from 'axios';

// Inside your Login component
const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Collect user credentials from the form
      const formData = {
        email: e.target.email.value,
        password: e.target.password.value
      };

      // Make a POST request to backend route for user login
      const response = await axios.post('/api/users/login', formData);

      // Display success message if login was successful
      alert('Login successful!');
    } catch (error) {
      // Display error message if login failed
      alert('Login failed! Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
