import InfoIcon from '@mui/icons-material/Info';
import { ImageListItemBar, IconButton } from '@mui/material';

import { sliderStyles } from './Slider/Slider.styles';

interface ImageDescriptionProps {
  onShowBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImageDescription = ({ onShowBtnClick }: ImageDescriptionProps) => {
  return (
    <ImageListItemBar
      title="Title"
      subtitle="SubTitle"
      actionIcon={
        <IconButton
          size="large"
          sx={sliderStyles.iconButton}
          aria-label="Info about Item Images"
          onClick={() => onShowBtnClick((state) => !state)}
        >
          <InfoIcon sx={sliderStyles.infoIcon} />
        </IconButton>
      }
      sx={sliderStyles.imageItemBar}
    />
  );
};
