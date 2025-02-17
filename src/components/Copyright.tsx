import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Stack } from '@mui/material';

export default function Copyright() {
  return (
  <Stack spacing={2} justifyContent="center">
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <MuiLink color="inherit" href="https://www.safeinvest.com/">
        Safe Invest
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>    
    </Stack>    
  );
}