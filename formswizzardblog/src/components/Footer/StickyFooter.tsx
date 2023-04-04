import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      {'FormsWizard'}
      {' '}
      {new Date().getFullYear()}
      {'.'}
      <br></br>


      {'Funded through '}
          <Link color="inherit" href="https://prototypefund.de/">
          <img src="https://i.postimg.cc/zGJGSPZr/Screenshot-2023-04-04-at-13-50-44.png" width="24rem" height="24rem" alt="Logo" ></img>
            PrototypeFund
          </Link>{' '}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        bottom: 0,
        position: 'fixed',
        alignItems: 'center',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h5" component="h2" gutterBottom>
          {'Add: Anything repeated.'}
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container >
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}