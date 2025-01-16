import InfoIcon from '@mui/icons-material/Info';
import { ImageListItemBar, IconButton } from '@mui/material';

import { sliderStyles } from './Slider/Slider.styles';

interface ImageDescriptionProps {
  imageTitle: string;
  imageSubTitle: string;
  onShowBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImageDescription = ({
  imageTitle,
  imageSubTitle,
  onShowBtnClick,
}: ImageDescriptionProps) => {
  return (
    <ImageListItemBar
      title={imageTitle}
      subtitle={imageSubTitle}
      actionIcon={
        <IconButton
          size="large"
          sx={sliderStyles.iconButton}
          aria-label={`More information about ${imageTitle}`}
          onClick={() => onShowBtnClick((state) => !state)}
        >
          <InfoIcon sx={sliderStyles.infoIcon} />
        </IconButton>
      }
      sx={sliderStyles.imageItemBar}
      role="button"
      aria-label={`Toggle details for ${imageTitle}`}
    />
  );
};
