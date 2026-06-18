import { useState, useEffect, useRef } from 'react';
import { categories, shortcuts } from './data/shortcuts';
import VirtualKeyboard from './components/VirtualKeyboard';
import ShortcutCard from './components/ShortcutCard';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Search & Navigation States
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Interactive Keyboard States
  const [activeModifiers, setActiveModifiers] = useState(new Set());
  const [hoveredKeys, setHoveredKeys] = useState([]);
  
  // Favorites State (persisted in LocalStorage)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorite_shortcuts');
    return saved ? JSON.parse(saved) : [];
  });

  const searchInputRef = useRef(null);

  // Sync theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync favorites to LocalStorage
  useEffect(() => {
    localStorage.setItem('favorite_shortcuts', JSON.stringify(favorites));
  }, [favorites]);

  // Global keyboard shortcuts for our app
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Focus search on '/' (if not already focusing an input)
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      
      // Clear filters/search on Escape
      if (e.key === 'Escape') {
        setSearchQuery('');
        setActiveModifiers(new Set());
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const toggleModifier = (mod) => {
    setActiveModifiers(prev => {
      const next = new Set(prev);
      if (next.has(mod)) {
        next.delete(mod);
      } else {
        next.add(mod);
      }
      return next;
    });
  };

  const clearModifiers = () => {
    setActiveModifiers(new Set());
  };

  // Keyboard modifiers translation helper for searches
  const normalizeQuery = (q) => {
    return q
      .toLowerCase()
      .replace(/\bcmd\b|\bcommand\b/g, 'command')
      .replace(/\bopt\b|\boption\b/g, 'option')
      .replace(/\bctrl\b|\bcontrol\b/g, 'control')
      .replace(/\bshift\b/g, 'shift')
      .trim();
  };

  // Filter logic
  const filteredShortcuts = shortcuts.filter(shortcut => {
    // 1. Filter by category tab
    if (activeCategory === 'favorites') {
      if (!favorites.includes(shortcut.id)) return false;
    } else if (activeCategory !== 'all') {
      if (shortcut.category !== activeCategory) return false;
    }

    // 2. Filter by clicked modifiers on virtual keyboard
    if (activeModifiers.size > 0) {
      // Shortcut keys list must contain ALL active modifiers
      const shortcutKeysLower = shortcut.keys.map(k => k.toLowerCase());
      for (const mod of activeModifiers) {
        if (!shortcutKeysLower.includes(mod)) return false;
      }
    }

    // 3. Filter by search query
    if (searchQuery.trim()) {
      const normQuery = normalizeQuery(searchQuery);
      
      // Search in description
      const descMatch = shortcut.description.toLowerCase().includes(normQuery);
      
      // Search in key combinations (e.g. 'command c' or 'cmd c')
      const keysLabelMatch = shortcut.label.toLowerCase().includes(normQuery);
      const keysArrayMatch = shortcut.keys.some(key => 
        key.toLowerCase().includes(normQuery) || 
        normQuery.includes(key.toLowerCase())
      );
      
      return descMatch || keysLabelMatch || keysArrayMatch;
    }

    return true;
  });

  // Calculate count badges for sidebar
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'favorites') return favorites.length;
    
    return shortcuts.filter(s => {
      const categoryMatch = categoryId === 'all' || s.category === categoryId;
      if (!categoryMatch) return false;
      
      // Still apply active modifier constraints to counts
      if (activeModifiers.size > 0) {
        const shortcutKeysLower = s.keys.map(k => k.toLowerCase());
        for (const mod of activeModifiers) {
          if (!shortcutKeysLower.includes(mod)) return false;
        }
      }
      return true;
    }).length;
  };

  return (
    <div className="app-container">
      {/* Header Bar */}
      <header className="app-header">
        <div className="logo-section">
          <span className="logo-icon">⌨️</span>
          <h1 className="logo-title">macOS Shortcuts</h1>
        </div>

        <div className="header-actions">
          {activeModifiers.size > 0 && (
            <button 
              className="sidebar-btn" 
              onClick={clearModifiers}
              style={{ padding: '6px 12px', fontSize: '12px', border: '1px solid var(--border-element)' }}
            >
              Reset Keys
            </button>
          )}

          <button 
            className="icon-btn" 
            onClick={toggleTheme} 
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      {/* Hero Header */}
      <section className="hero-section">
        <h2 className="hero-title">Interactive Keyboard Shortcut Guide</h2>
        <p className="hero-subtitle">
          Hover over shortcuts to highlight their keys on the keyboard. 
          Click modifiers on the virtual keyboard to filter combinations.
        </p>
      </section>

      {/* Interactive Virtual Keyboard Section */}
      <section className="glass-panel keyboard-section">
        <div className="keyboard-controls">
          <span>MacBook Layout</span>
          {activeModifiers.size > 0 && (
            <div className="active-modifiers">
              <span>Active filters:</span>
              {Array.from(activeModifiers).map(mod => (
                <span key={mod} className="modifier-pill active">
                  {mod === 'command' && '⌘'}
                  {mod === 'option' && '⌥'}
                  {mod === 'control' && '⌃'}
                  {mod === 'shift' && '⇧'}
                  {mod === 'fn' && 'fn'}
                  {' '}{mod}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="keyboard-wrapper">
          <VirtualKeyboard 
            activeModifiers={activeModifiers} 
            onToggleModifier={toggleModifier}
            hoveredKeys={hoveredKeys}
          />
        </div>
      </section>

      {/* Search and Shortcuts Listing */}
      <main className="content-section">
        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Search shortcuts by keys or actions... (Press '/' to focus, 'Esc' to clear)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Sidebar categories navigation */}
        <aside className="glass-panel sidebar">
          <h3 className="sidebar-heading">Categories</h3>
          
          <button 
            className={`sidebar-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <span className="sidebar-icon">📑</span>
            <span>All Shortcuts</span>
            <span className="sidebar-badge">{getCategoryCount('all')}</span>
          </button>

          <button 
            className={`sidebar-btn ${activeCategory === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveCategory('favorites')}
          >
            <span className="sidebar-icon" style={{ color: '#ffb703' }}>★</span>
            <span>Favorites</span>
            <span className="sidebar-badge">{getCategoryCount('favorites')}</span>
          </button>

          <div style={{ height: '1px', background: 'var(--border-element)', margin: '8px 0' }} />

          {categories.map(cat => (
            <button
              key={cat.id}
              className={`sidebar-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="sidebar-icon">{cat.icon}</span>
              <span>{cat.title}</span>
              <span className="sidebar-badge">{getCategoryCount(cat.id)}</span>
            </button>
          ))}
        </aside>

        {/* Shortcuts list view */}
        <section className="shortcuts-grid">
          {filteredShortcuts.length > 0 ? (
            filteredShortcuts.map(shortcut => (
              <ShortcutCard
                key={shortcut.id}
                shortcut={shortcut}
                isFavorite={favorites.includes(shortcut.id)}
                onToggleFavorite={() => toggleFavorite(shortcut.id)}
                onHover={setHoveredKeys}
                onLeave={() => setHoveredKeys([])}
              />
            ))
          ) : (
            <div className="glass-panel no-results">
              <span className="no-results-icon">🤷‍♂️</span>
              <h4 className="no-results-title">No shortcuts match your filter</h4>
              <p className="no-results-text">
                Try resetting keyboard modifiers, clearing the search query, or choosing a different category.
              </p>
              <button 
                className="sidebar-btn" 
                onClick={() => {
                  setSearchQuery('');
                  clearModifiers();
                  setActiveCategory('all');
                }}
                style={{ width: 'auto', background: 'var(--accent)', color: 'var(--key-active-text)', padding: '10px 20px' }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
