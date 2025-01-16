import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { flagOptions, LanguageOption } from '../../../config/flagOptions';

export const LanguageSelector: React.FC = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const language =
    flagOptions.find((o) => o.code === i18n.language) ?? flagOptions[0];
  const [selectedFlag, setSelectedFlag] = useState<LanguageOption>(language);

  const handleOptionClick = (option: LanguageOption): void => {
    setSelectedFlag(option);
    i18n.changeLanguage(option.code);
    setShowOptions(false);
  };

  const unselectedOptions: LanguageOption[] = flagOptions.filter(
    (option) => option.code !== selectedFlag.code,
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        position: 'absolute',
        top: 96,
        right: 32,
      }}
    >
      <Box
        onClick={() => setShowOptions((prev) => !prev)}
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#3498db',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          border: '2px solid #ddd',
        }}
      >
        <img
          src={selectedFlag.flag}
          alt={selectedFlag.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {showOptions && (
        <Box style={{ marginTop: 10, textAlign: 'center' }}>
          {unselectedOptions.map((option) => (
            <Box
              key={option.code}
              onClick={() => handleOptionClick(option)}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: 10,
                cursor: 'pointer',
                border: '2px solid #ddd',
              }}
            >
              <img
                src={option.flag}
                alt={option.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
