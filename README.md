# Book Hub: A React Discovery App

Book Hub is a web application designed to help users discover books. It integrates a React frontend with a Node.js + Express backend and uses PostgreSQL for data storage. The app also leverages the Google Books API to fetch book data dynamically.

## Features

### Frontend:
- Browse and search for books
- View book details (title, author, genre, publication date, rating, cover image, and description)
- Responsive design for all screen sizes

### Backend:
- RESTful API for managing book data
- Integration with the Google Books API for searching books
- CRUD operations for books (Create, Read, Update, Delete)

### Database:
- PostgreSQL for storing book data

## Technologies Used

### Frontend:
- React (with TypeScript)
- Axios (for API requests)
- CSS Modules (for styling)

### Backend:
- Node.js
- Express.js
- PostgreSQL
- Axios (for Google Books API integration)

### APIs:
- Google Books API

## Project Structure

### Frontend
```
src/
├── components/
│   ├── BookCard.tsx       // Component to display individual book details
│   ├── BookList.tsx       // Component to display a list of books
│   ├── SearchBar.tsx      // Component for searching books
├── services/
│   ├── api.ts             // Axios instance and API functions
├── types/
│   ├── types.ts           // TypeScript interfaces for book data
├── App.tsx                // Main application component
├── index.tsx              // Entry point for the React app
├── index.css              // Global styles
```

### Backend
```
book-hub-backend/
├── controllers/
│   ├── bookController.js  // Handles book-related logic
├── routes/
│   ├── bookRoutes.js      // Defines API routes for books
├── services/
│   ├── googleBooksService.js // Fetches data from Google Books API
├── db/
│   ├── db.js              // PostgreSQL connection setup
├── index.js               // Entry point for the backend server
├── .env                   // Environment variables (e.g., database credentials, API keys)
```

## Setup Instructions

### 1. Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- Google Books API Key (get it from Google Cloud Console)

### 2. Backend Setup

**Clone the Repository:**
```bash
git clone https://github.com/your-username/book-hub.git
cd book-hub/book-hub-backend
```

**Install Dependencies:**
```bash
npm install
```

**Set Up PostgreSQL:**
- Create a database named `bookhub`
- Update the `.env` file with your database credentials:
```
DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=bookhub
DB_PORT=5432
GOOGLE_BOOKS_API_KEY=your_google_books_api_key
PORT=5000
```

**Run Migrations:**
- Create the books table in PostgreSQL:
```sql
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(100),
  publication_date DATE,
  rating FLOAT,
  cover_image TEXT,
  description TEXT
);
```

**Start the Backend Server:**
```bash
npm run dev
```
The backend will run on http://localhost:5000.

### 3. Frontend Setup

**Navigate to the Frontend Directory:**
```bash
cd ../book-hub-frontend
```

**Install Dependencies:**
```bash
npm install
```

**Start the Frontend Server:**
```bash
npm start
```
The frontend will run on http://localhost:3000.

## API Endpoints

### Books
- `GET /api/books`: Fetch all books
- `GET /api/books/:id`: Fetch a single book by ID
- `POST /api/books`: Add a new book
  - Request Body:
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic",
    "publicationDate": "1925-04-10",
    "rating": 4.5,
    "coverImage": "https://example.com/great-gatsby.jpg",
    "description": "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."
  }
  ```
- `PUT /api/books/:id`: Update a book by ID
- `DELETE /api/books/:id`: Delete a book by ID

### Search
- `GET /api/books/search?query=react`: Search for books using the Google Books API

## Usage

1. **Browse Books:**
   - Open the app in your browser (http://localhost:3000)
   - View the list of books fetched from the backend

2. **Search Books:**
   - Enter a search query (e.g., react) in the search bar
   - View the results fetched from the Google Books API

3. **Add/Edit/Delete Books:**
   - Use the appropriate forms or buttons to manage books (if implemented in the UI)

## Contributing

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request

## Acknowledgements
- Google Books API for providing book data
- React and Express for building the app

## Contact

For questions or feedback, please contact:

- Juliet Mukamani
- Email: j.mukamani@alustudent.com
- GitHub: jmukamani

Enjoy exploring books with Book Hub! 📚