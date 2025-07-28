import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Category from './components/Category.jsx';
import Search from './components/Search.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header onSearch={handleSearch} />
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;