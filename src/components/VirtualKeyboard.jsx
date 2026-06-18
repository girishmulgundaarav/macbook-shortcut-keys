import React from 'react';

export default function VirtualKeyboard({ 
  activeModifiers, 
  onToggleModifier, 
  hoveredKeys = [] 
}) {
  // Check if a key is currently highlighted (from hovering over a shortcut card)
  const isHighlighted = (keyId) => {
    return hoveredKeys.some(k => k.toLowerCase() === keyId.toLowerCase());
  };

  // Check if a modifier is active (clicked/toggled on the keyboard)
  const isModifierActive = (keyId) => {
    return activeModifiers.has(keyId.toLowerCase());
  };

  // Helper to determine CSS classes for a key
  const getKeyClass = (keyId, customClass = '') => {
    const isMod = ['command', 'option', 'control', 'shift', 'fn'].includes(keyId.toLowerCase());
    return `key ${customClass} ${isMod && isModifierActive(keyId) ? 'modifier-active' : ''} ${isHighlighted(keyId) ? 'key-highlighted' : ''}`;
  };

  // Safe handler to toggle modifier keys
  const handleKeyClick = (keyId) => {
    const isMod = ['command', 'option', 'control', 'shift', 'fn'].includes(keyId.toLowerCase());
    if (isMod) {
      onToggleModifier(keyId.toLowerCase());
    }
  };

  return (
    <div className="keyboard">
      {/* Row 1: Function Keys */}
      <div className="kb-row">
        <button className={getKeyClass('escape', 'key-esc')} onClick={() => handleKeyClick('escape')}>
          <span className="key-label">esc</span>
          <span className="key-symbol">⎋</span>
        </button>
        <button className={getKeyClass('f1')} onClick={() => handleKeyClick('f1')}>F1</button>
        <button className={getKeyClass('f2')} onClick={() => handleKeyClick('f2')}>F2</button>
        <button className={getKeyClass('f3')} onClick={() => handleKeyClick('f3')}>F3</button>
        <button className={getKeyClass('f4')} onClick={() => handleKeyClick('f4')}>F4</button>
        <button className={getKeyClass('f5')} onClick={() => handleKeyClick('f5')}>F5</button>
        <button className={getKeyClass('f6')} onClick={() => handleKeyClick('f6')}>F6</button>
        <button className={getKeyClass('f7')} onClick={() => handleKeyClick('f7')}>F7</button>
        <button className={getKeyClass('f8')} onClick={() => handleKeyClick('f8')}>F8</button>
        <button className={getKeyClass('f9')} onClick={() => handleKeyClick('f9')}>F9</button>
        <button className={getKeyClass('f10')} onClick={() => handleKeyClick('f10')}>F10</button>
        <button className={getKeyClass('f11')} onClick={() => handleKeyClick('f11')}>F11</button>
        <button className={getKeyClass('f12')} onClick={() => handleKeyClick('f12')}>F12</button>
        <button className={getKeyClass('power', 'key-power')} onClick={() => handleKeyClick('power')} title="Power / Touch ID">
          <span className="key-symbol" style={{ fontSize: '12px' }}>🔒</span>
        </button>
      </div>

      {/* Row 2: Numbers & Symbols */}
      <div className="kb-row">
        <button className={getKeyClass('`')} onClick={() => handleKeyClick('`')}>~<br/>`</button>
        <button className={getKeyClass('1')} onClick={() => handleKeyClick('1')}>!<br/>1</button>
        <button className={getKeyClass('2')} onClick={() => handleKeyClick('2')}>@<br/>2</button>
        <button className={getKeyClass('3')} onClick={() => handleKeyClick('3')}>#<br/>3</button>
        <button className={getKeyClass('4')} onClick={() => handleKeyClick('4')}>$<br/>4</button>
        <button className={getKeyClass('5')} onClick={() => handleKeyClick('5')}>%<br/>5</button>
        <button className={getKeyClass('6')} onClick={() => handleKeyClick('6')}>^<br/>6</button>
        <button className={getKeyClass('7')} onClick={() => handleKeyClick('7')}>&<br/>7</button>
        <button className={getKeyClass('8')} onClick={() => handleKeyClick('8')}>*<br/>8</button>
        <button className={getKeyClass('9')} onClick={() => handleKeyClick('9')}>(<br/>9</button>
        <button className={getKeyClass('0')} onClick={() => handleKeyClick('0')}>)<br/>0</button>
        <button className={getKeyClass('-')} onClick={() => handleKeyClick('-')}>_<br/>-</button>
        <button className={getKeyClass('=')} onClick={() => handleKeyClick('=')}>+<br/>=</button>
        <button className={getKeyClass('delete', 'key-delete')} onClick={() => handleKeyClick('delete')}>
          <span className="key-label">delete</span>
          <span className="key-symbol">⌫</span>
        </button>
      </div>

      {/* Row 3: QWERTY Row 1 */}
      <div className="kb-row">
        <button className={getKeyClass('tab', 'key-tab')} onClick={() => handleKeyClick('tab')}>
          <span className="key-label">tab</span>
          <span className="key-symbol">⇥</span>
        </button>
        <button className={getKeyClass('q')} onClick={() => handleKeyClick('q')}>Q</button>
        <button className={getKeyClass('w')} onClick={() => handleKeyClick('w')}>W</button>
        <button className={getKeyClass('e')} onClick={() => handleKeyClick('e')}>E</button>
        <button className={getKeyClass('r')} onClick={() => handleKeyClick('r')}>R</button>
        <button className={getKeyClass('t')} onClick={() => handleKeyClick('t')}>T</button>
        <button className={getKeyClass('y')} onClick={() => handleKeyClick('y')}>Y</button>
        <button className={getKeyClass('u')} onClick={() => handleKeyClick('u')}>U</button>
        <button className={getKeyClass('i')} onClick={() => handleKeyClick('i')}>I</button>
        <button className={getKeyClass('o')} onClick={() => handleKeyClick('o')}>O</button>
        <button className={getKeyClass('p')} onClick={() => handleKeyClick('p')}>P</button>
        <button className={getKeyClass('[')} onClick={() => handleKeyClick('[')}>{'{'}<br/>[</button>
        <button className={getKeyClass(']')} onClick={() => handleKeyClick(']')}>{'}'}<br/>]</button>
        <button className={getKeyClass('\\')} onClick={() => handleKeyClick('\\')}>|<br/>\</button>
      </div>

      {/* Row 4: QWERTY Row 2 */}
      <div className="kb-row">
        <button className={getKeyClass('capslock', 'key-caps')} onClick={() => handleKeyClick('capslock')}>
          <span className="key-label">caps lock</span>
          <span className="key-symbol">⇪</span>
        </button>
        <button className={getKeyClass('a')} onClick={() => handleKeyClick('a')}>A</button>
        <button className={getKeyClass('s')} onClick={() => handleKeyClick('s')}>S</button>
        <button className={getKeyClass('d')} onClick={() => handleKeyClick('d')}>D</button>
        <button className={getKeyClass('f')} onClick={() => handleKeyClick('f')}>F</button>
        <button className={getKeyClass('g')} onClick={() => handleKeyClick('g')}>G</button>
        <button className={getKeyClass('h')} onClick={() => handleKeyClick('h')}>H</button>
        <button className={getKeyClass('j')} onClick={() => handleKeyClick('j')}>J</button>
        <button className={getKeyClass('k')} onClick={() => handleKeyClick('k')}>K</button>
        <button className={getKeyClass('l')} onClick={() => handleKeyClick('l')}>L</button>
        <button className={getKeyClass(';')} onClick={() => handleKeyClick(';')}>:<br/>;</button>
        <button className={getKeyClass('\'')} onClick={() => handleKeyClick('\'')}>"<br/>'</button>
        <button className={getKeyClass('return', 'key-return')} onClick={() => handleKeyClick('return')}>
          <span className="key-label">return</span>
          <span className="key-symbol">⏎</span>
        </button>
      </div>

      {/* Row 5: QWERTY Row 3 */}
      <div className="kb-row">
        <button className={getKeyClass('shift', 'key-lshift')} onClick={() => handleKeyClick('shift')}>
          <span className="key-label">shift</span>
          <span className="key-symbol">⇧</span>
        </button>
        <button className={getKeyClass('z')} onClick={() => handleKeyClick('z')}>Z</button>
        <button className={getKeyClass('x')} onClick={() => handleKeyClick('x')}>X</button>
        <button className={getKeyClass('c')} onClick={() => handleKeyClick('c')}>C</button>
        <button className={getKeyClass('v')} onClick={() => handleKeyClick('v')}>V</button>
        <button className={getKeyClass('b')} onClick={() => handleKeyClick('b')}>B</button>
        <button className={getKeyClass('n')} onClick={() => handleKeyClick('n')}>N</button>
        <button className={getKeyClass('m')} onClick={() => handleKeyClick('m')}>M</button>
        <button className={getKeyClass(',')} onClick={() => handleKeyClick(',')}>&lt;<br/>,</button>
        <button className={getKeyClass('.')} onClick={() => handleKeyClick('.')}>&gt;<br/>.</button>
        <button className={getKeyClass('/')} onClick={() => handleKeyClick('/')}>?<br/>/</button>
        <button className={getKeyClass('shift', 'key-rshift')} onClick={() => handleKeyClick('shift')}>
          <span className="key-label">shift</span>
          <span className="key-symbol">⇧</span>
        </button>
      </div>

      {/* Row 6: Modifier Controls & Spacebar & Arrows */}
      <div className="kb-row">
        <button className={getKeyClass('fn', 'key-fn')} onClick={() => handleKeyClick('fn')}>
          <span className="key-label">fn</span>
          <span className="key-symbol">🌐</span>
        </button>
        <button className={getKeyClass('control', 'key-ctrl')} onClick={() => handleKeyClick('control')}>
          <span className="key-label">control</span>
          <span className="key-symbol">⌃</span>
        </button>
        <button className={getKeyClass('option', 'key-opt')} onClick={() => handleKeyClick('option')}>
          <span className="key-label">option</span>
          <span className="key-symbol">⌥</span>
        </button>
        <button className={getKeyClass('command', 'key-cmd')} onClick={() => handleKeyClick('command')}>
          <span className="key-label">command</span>
          <span className="key-symbol">⌘</span>
        </button>
        <button className={getKeyClass('space', 'key-space')} onClick={() => handleKeyClick('space')}>
          Space
        </button>
        <button className={getKeyClass('command', 'key-cmd')} onClick={() => handleKeyClick('command')}>
          <span className="key-label">command</span>
          <span className="key-symbol">⌘</span>
        </button>
        <button className={getKeyClass('option', 'key-opt')} onClick={() => handleKeyClick('option')}>
          <span className="key-label">option</span>
          <span className="key-symbol">⌥</span>
        </button>

        {/* Mac Arrow Keys Stack */}
        <div className="key-arrow-container">
          <div className="key-arrow-stacked">
            <button 
              className={getKeyClass('arrowleft', 'key-arrow')} 
              onClick={() => handleKeyClick('arrowleft')}
              style={{ flex: 1 }}
            >
              ◀
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '2px' }}>
              <button 
                className={getKeyClass('arrowup', 'key-arrow')} 
                onClick={() => handleKeyClick('arrowup')}
                style={{ height: '11px', padding: 0, fontSize: '8px' }}
              >
                ▲
              </button>
              <button 
                className={getKeyClass('arrowdown', 'key-arrow')} 
                onClick={() => handleKeyClick('arrowdown')}
                style={{ height: '11px', padding: 0, fontSize: '8px' }}
              >
                ▼
              </button>
            </div>
            <button 
              className={getKeyClass('arrowright', 'key-arrow')} 
              onClick={() => handleKeyClick('arrowright')}
              style={{ flex: 1 }}
            >
              ▶
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
