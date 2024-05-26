import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteBook = async () => {
      try {
        await axios.delete(`/api/books/${id}`);
        navigate.push('/books');
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    };

    deleteBook();
  }, [id, navigate]);

  return (
    <div>
      <h2>Deleting Book...</h2>
    </div>
  );
};

export default DeleteBook;
