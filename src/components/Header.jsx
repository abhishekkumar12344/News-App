import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">NewsHub </Link>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search news..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;