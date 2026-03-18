import type { SearchResult } from '../data/searchIndex';
import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { searchIndex} from '../data/searchIndex';

interface NavigationBarProps {
  activeSection: string;
  onWarp: (id: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeSection, onWarp }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 1) {
      const filteredSuggestions = searchIndex.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setSuggestions(filteredSuggestions);
      setActiveSuggestionIndex(0);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0) {
        warpTo(suggestions[activeSuggestionIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
    }
  };

  const warpTo = (item: SearchResult) => {
    setSearchQuery('');
    setSuggestions([]);
    setIsSearchOpen(false);
    onWarp(item.id);
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen(prev => !prev);
    setSearchQuery('');
    setSuggestions([]);
  };

  return (
    <Navbar expand="lg" fixed="top" className="app-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" active={activeSection === 'home'}>Home</Nav.Link>
            <Nav.Link href="#about" active={activeSection === 'about'}>About</Nav.Link>
            <Nav.Link href="#projects" active={activeSection === 'projects'}>Projects</Nav.Link>
            <Nav.Link href="#skills" active={activeSection === 'skills'}>Skills</Nav.Link>
            <Nav.Link href="#courses" active={activeSection === 'courses'}>Courses</Nav.Link>
            <Nav.Link href="#contact" active={activeSection === 'contact'}>Contact</Nav.Link>
            <div className="search-container">
              {!isSearchOpen && <FaSearch className="search-icon" onClick={handleSearchIconClick} />}
              <input
                ref={searchInputRef}
                type="text"
                className={`search-input ${isSearchOpen ? 'open' : ''}`}
                placeholder="Go to...."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              />
              {isSearchOpen && <span className="search-prompt open">&gt;</span>}
              {isSearchOpen && suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {suggestions.map((item, index) => (
                    <li
                      key={item.id}
                      className={`suggestion-item ${index === activeSuggestionIndex ? 'active' : ''}`}
                      onMouseDown={() => warpTo(item)}
                    >
                      <span className="suggestion-category">[{item.category.substring(0, 3).toUpperCase()}]</span>
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

