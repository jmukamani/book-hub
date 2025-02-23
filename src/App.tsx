import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from './store/bookSlice';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './index.css';
import axios from 'axios';
import { Book } from './types/types';

const API_KEY = 'AIzaSyAT87JZy2NjLHwypLe7eo-Kc21hKgnCRTM';

const fetchBooks = async (query = 'react'): Promise<Book[]> => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=20`
  );
  return response.data.items.map((item: any) => ({
    id: item.id,
    title: item.volumeInfo.title,
    author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
    genre: item.volumeInfo.categories ? item.volumeInfo.categories[0] : 'Unknown Genre',
    publicationDate: item.volumeInfo.publishedDate || 'Unknown Date',
    rating: item.volumeInfo.averageRating || 0,
    coverImage: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150',
    description: item.volumeInfo.description || 'No description available.',
  }));
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: any) => state.books.filteredBooks);

  useEffect(() => {
    fetchBooks().then((books) => dispatch(setBooks(books)));
  }, [dispatch]);

  const handleSearch = (query: string) => {
    fetchBooks(query).then((books) => dispatch(setBooks(books)));
  };

  return (
    <div className="app">
      <h1>Book Hub</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default App;