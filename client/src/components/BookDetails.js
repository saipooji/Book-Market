import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`/api/books/${id}`);
      setBook(response.data);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  return (
    <div>
      <h2>Book Details</h2>
      {book && (
        <div>
          <h3>Title: {book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: {book.price}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
