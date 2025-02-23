import React from 'react';
import { Book } from '../types/types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bookCard" style={{ cursor: 'pointer' }}>
      <img src={book.coverImage} alt={book.title} />
      <div className="details">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.genre}</p>
        <p>Published: {book.publicationDate}</p>
        <p className="rating">Rating: {book.rating}</p>
      </div>
    </div>
  );
};

export default BookCard;