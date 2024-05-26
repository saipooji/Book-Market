// routes/books.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Book = require('../models/Book');

// Create a new book
router.post('/', auth, async (req, res) => {
  const { title, author, price } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      price,
      user: req.user.id,
    });
    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Read all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().populate('user', ['name']);
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Read a single book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('user', ['name']);
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update a book
router.put('/:id', auth, async (req, res) => {
  const { title, author, price } = req.body;
  try {
    let book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    if (book.user.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });
    
    book.title = title;
    book.author = author;
    book.price = price;

    book = await book.save();

    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete a book
router.delete('/:id', auth, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    if (book.user.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });
    
    await book.remove();
    res.json({ msg: 'Book removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
