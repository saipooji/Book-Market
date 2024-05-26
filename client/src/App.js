import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetails} />
        <Route exact path="/add-book" component={AddBook} />
        <Route exact path="/edit-book/:id" component={EditBook} />
      </Routes>
    </Router>
  );
}

export default App;
