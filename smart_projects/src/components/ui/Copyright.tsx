import { Link, Typography } from '@mui/material';

export const Copyright = () => {
  return (
    <Typography variant="body2" sx={{ color: 'primary.contrastText', mt: 1 }}>
      {'Copyright © '}
      <Link href="https://mui.com/">SmartProjects</Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
};
