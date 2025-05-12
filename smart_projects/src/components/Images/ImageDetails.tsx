import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Box, Typography } from '@mui/material';

import { imageDetailsStyles } from './ImageDetails.styles';

interface ImageDetailsProps {
  description: string;
  onCloseBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImageDetails = ({
  description,
  onCloseBtnClick,
}: ImageDetailsProps) => {
  return (
    <Box sx={imageDetailsStyles.container}>
      <Box sx={imageDetailsStyles.titleContainer}>
        <Typography
          aria-hidden={false}
          variant="button"
          sx={{ fontSize: '1rem', whiteSpace: 'pre-line' }}
        >
          {description}
        </Typography>
      </Box>
      <IconButton
        size="large"
        sx={imageDetailsStyles.iconButton}
        aria-label="Close details"
        onClick={() => onCloseBtnClick((state) => !state)}
      >
        <CloseIcon sx={{ fontSize: '35px' }} />
      </IconButton>
    </Box>
  );
};
