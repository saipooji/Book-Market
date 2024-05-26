import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/books', formData);
      setErrorMessage('');
      alert('Book added successfully!');
    } catch (error) {
      setErrorMessage('Error adding book. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        <input type="text" name="author" placeholder="Author" onChange={(e) => setFormData({ ...formData, author: e.target.value })} />
        <input type="number" name="price" placeholder="Price" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
