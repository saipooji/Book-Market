import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        const { title, author, price } = response.data;
        setTitle(title);
        setAuthor(author);
        setPrice(price);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/books/${id}`, { title, author, price });
      navigate.push(`/books/${id}`);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div>
      <h2>Update Book</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateBook;
