import React, { useState } from 'react';

export const LanguageSelector = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleCircleClick = () => {
    setShowOptions((prev) => !prev);
  };

  const handleOptionClick = (option: any) => {
    alert(`You selected: ${option}`);
    setShowOptions(false); // Close options after selection
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        margin: 16,
        position: 'absolute',
        top: 60,
        right: 30,
      }}
    >
      {/* Circle Div */}
      <div
        onClick={handleCircleClick}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: '#3498db',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        +
      </div>

      {/* Options */}
      {showOptions && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <div
            onClick={() => handleOptionClick('Option 1')}
            style={{
              padding: '5px 10px',
              backgroundColor: '#2ecc71',
              borderRadius: '5px',
              marginBottom: '5px',
              cursor: 'pointer',
            }}
          >
            Option 1
          </div>
          <div
            onClick={() => handleOptionClick('Option 2')}
            style={{
              padding: '5px 10px',
              backgroundColor: '#e74c3c',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Option 2
          </div>
        </div>
      )}
    </div>
  );
};
