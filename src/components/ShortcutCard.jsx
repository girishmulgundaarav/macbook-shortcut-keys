import React from 'react';
import { modifierSymbols } from '../data/shortcuts';

export default function ShortcutCard({ 
  shortcut, 
  isFavorite, 
  onToggleFavorite, 
  onHover, 
  onLeave 
}) {
  const formatKey = (key) => {
    return modifierSymbols[key.toLowerCase()] || key.toUpperCase();
  };

  const handleCopy = () => {
    const textToCopy = `${shortcut.label} : ${shortcut.description}`;
    navigator.clipboard.writeText(textToCopy);
    
    // Add subtle visual feedback if desired
    // (Here we just do a quick tooltip or rely on standard OS copying)
  };

  return (
    <div 
      className="glass-panel shortcut-card"
      onMouseEnter={() => onHover(shortcut.keys)}
      onMouseLeave={onLeave}
    >
      <div className="shortcut-card-info">
        <span className="shortcut-card-cat">{shortcut.category}</span>
        <p className="shortcut-card-desc">{shortcut.description}</p>
      </div>

      <div className="shortcut-card-keys">
        {shortcut.keys.map((key, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="keycap-plus">+</span>}
            <kbd className="keycap" title={key}>
              {formatKey(key)}
            </kbd>
          </React.Fragment>
        ))}

        <button 
          className="fav-btn" 
          onClick={handleCopy} 
          title="Copy shortcut"
          style={{ marginLeft: '12px', fontSize: '15px' }}
        >
          📋
        </button>

        <button 
          className={`fav-btn ${isFavorite ? 'active' : ''}`} 
          onClick={onToggleFavorite}
          title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        >
          ★
        </button>
      </div>
    </div>
  );
}
