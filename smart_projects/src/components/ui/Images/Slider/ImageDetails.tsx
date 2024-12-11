import { ImageListItemBar, IconButton, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import React from 'react';

interface ImageDetailsProps {
  onDetailsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImageDetails = ({ onDetailsShow }: ImageDetailsProps) => {
  return (
    <ImageListItemBar
      title="Title"
      subtitle="SubTitle"
      actionIcon={
        <IconButton
          size="large"
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label="Info about Item Images"
          onClick={() => onDetailsShow((state) => !state)}
        >
          <InfoIcon sx={{ fontSize: '35px' }} />
        </IconButton>
      }
      sx={{
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        position: 'relative',
        top: -105,
      }}
    />
  );
};
