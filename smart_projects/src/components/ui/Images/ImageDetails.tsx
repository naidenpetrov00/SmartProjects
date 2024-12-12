import React from 'react';

import { IconButton, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ImageDetailsProps {
  onCloseBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImageDetails = ({ onCloseBtnClick }: ImageDetailsProps) => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
        color: 'white',
        display: 'flex',
        // alignItems: 'center',
        zIndex: 1,
        textAlign: 'start',
      }}
    >
      <Box
        sx={{
          pl: 2,
          pt: 2,
          overflowY: 'auto',
          maxHeight: '90%',
          '&::-webkit-scrollbar': { display: 'none' }, // Chrome, Safari
          '-ms-overflow-style': 'none', // IE 10+
          'scrollbar-width': 'none',
        }}
      >
        <Typography variant="h5">ЧСИ 841 Office</Typography>
        <Typography variant="subtitle1">Адрес: Vitosha 17</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
        <Typography variant="subtitle1">Време на издработка: 20 дни</Typography>
      </Box>
      <IconButton
        size="large"
        sx={{
          position: 'absolute',
          bottom: 1, // Adjust the distance from the bottom
          right: 1, // Adjust the distance from the right
          color: 'rgba(255, 255, 255, 0.54)',
        }}
        aria-label="close"
        onClick={() => onCloseBtnClick((state) => !state)}
      >
        <CloseIcon sx={{ fontSize: '35px' }} />
      </IconButton>
    </Box>
  );
};
