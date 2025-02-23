import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../types/types';

interface BookState {
  books: Book[];
  filteredBooks: Book[];
  searchQuery: string;
}

const initialState: BookState = {
  books: [],
  filteredBooks: [],
  searchQuery: '',
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
      state.filteredBooks = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    filterBooks: (state) => {
      state.filteredBooks = state.books.filter((book) =>
        book.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
});

export const { setBooks, setSearchQuery, filterBooks } = bookSlice.actions;
export default bookSlice.reducer;