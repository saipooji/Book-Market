import React from 'react';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Welcome to Book Marketplace</h2>
        <p>
          This is a platform where you can buy and sell books within your community. Browse through the available books,
          add your own books to sell, or edit existing listings to keep them up to date.
        </p>
        <p>
          Whether you're a student looking for textbooks or a book enthusiast wanting to clear out your shelves, Book Marketplace
          is the place for you!
        </p>
        <h3>How It Works</h3>
        <ul>
          <li>Browse through the Book List to see what's available.</li>
          <li>Click on a book to view its details.</li>
          <li>Add your own books to the marketplace using the Add Book page.</li>
          <li>Edit or delete your listings as needed.</li>
          <li>Register or log in to access additional features.</li>
        </ul>
        <h3>Why Choose Book Marketplace?</h3>
        <p>
          Book Marketplace offers a convenient way to buy and sell books locally. By connecting with other members of your community,
          you can find great deals on books and support fellow readers.
        </p>
        <p>
          Plus, by buying and selling secondhand books, you're helping to reduce waste and promote sustainability.
        </p>
      </div>
    </div>
  );
};

export default Home;
