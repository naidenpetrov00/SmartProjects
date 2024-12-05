import { SxProps, Theme } from '@mui/material';

interface MasonryImageListStyles {
  container: SxProps<Theme>;
}

export const masonryImageListStyles: MasonryImageListStyles = {
  container: { pl: { xs: 2, sm: 8 }, pr: { xs: 2, sm: 8 } },
};
