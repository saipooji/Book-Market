import React, { useState } from 'react';
// Import Axios at the top of your component
import axios from 'axios';

// Inside your Register component
const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Collect user data from the form
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      };

      // Make a POST request to backend route for user registration
      const response = await axios.post('/api/users/register', formData);

      // Display success message if registration was successful
      alert('Registration successful!');
    } catch (error) {
      // Display error message if registration failed
      alert('Registration failed! Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
