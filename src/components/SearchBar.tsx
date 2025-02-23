import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 500); // Debounce for 500ms

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  return (
    <div className="searchBar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
        style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px 0 0 4px', outline: 'none' }}
      />
      <button
        onClick={() => onSearch(query)}
        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;