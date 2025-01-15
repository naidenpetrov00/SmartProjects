import { Link, Typography } from '@mui/material';

export const Copyright = () => {
  return (
    <Typography variant="body2" sx={{ color: 'primary.contrastText', mt: 1 }}>
      {'Copyright © '}
      <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer">
        SmartProjects
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
};
