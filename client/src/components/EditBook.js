import React, { useState } from 'react';
import axios from 'axios';

const EditBook = ({ bookId }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/books/${bookId}`, formData);
      setErrorMessage('');
      alert('Book updated successfully!');
    } catch (error) {
      setErrorMessage('Error updating book. Please try again.');
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        <input type="text" name="author" placeholder="Author" onChange={(e) => setFormData({ ...formData, author: e.target.value })} />
        <input type="number" name="price" placeholder="Price" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
