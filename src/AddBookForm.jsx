import React, { useState } from 'react';
import { addBook } from '../services/api';

const AddBookForm = ({ onBookAdded }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    rating: 0,
    coverImage: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = await addBook(book);
    onBookAdded(newBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <input
        type="text"
        placeholder="Genre"
        value={book.genre}
        onChange={(e) => setBook({ ...book, genre: e.target.value })}
      />
      <input
        type="date"
        placeholder="Publication Date"
        value={book.publicationDate}
        onChange={(e) => setBook({ ...book, publicationDate: e.target.value })}
      />
      <input
        type="number"
        placeholder="Rating"
        value={book.rating}
        onChange={(e) => setBook({ ...book, rating: parseFloat(e.target.value) })}
      />
      <input
        type="text"
        placeholder="Cover Image URL"
        value={book.coverImage}
        onChange={(e) => setBook({ ...book, coverImage: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={book.description}
        onChange={(e) => setBook({ ...book, description: e.target.value })}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;