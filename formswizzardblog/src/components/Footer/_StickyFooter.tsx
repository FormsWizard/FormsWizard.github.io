import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function FooterContent() {
    return (
      <Typography>
        <div variant="body2" color="text.secondary" justifyContent="center" alignItems="center">
          <div >
            <p>
            {'FormsWizard'}
            {' '}
            {new Date().getFullYear()}
            {''} <br></br><br></br>
            {'Funded through:'}
            </p>
          </div>

          <div color="text.secondary" justifyContent="center" alignItems="center" >
            <p>
            <Link color="inherit" href="https://prototypefund.de/">
            <img src="/src/images/PrototypeLogo/PrototypeFundLogo.png" width="54rem" height="54rem" alt="Logo" ></img>
              Prototype Fund
            </Link>{' '}
            </p>
          </div>

          <div color="text.secondary" justifyContent="center" alignItems="center">
            <p>
            <Link color="inherit" href="https://www.bmbf.de/bmbf/de/home/home_node.html">
              <img src="/src/images/BundesministeriumLogo/BundesministeriumLogo.png" width="150rem" height="150rem" alt="Logo_Bundesministerium" ></img>
            </Link>{' '}
            </p>
          </div>
        </div>
      </Typography>
    );
  }


export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        bottom: 0,
        position: 'fixed',
        alignItems: 'center',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg" font-family="surt-regular">
        <Typography variant="h5" component="h2" gutterBottom>
          {''}
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 30,
          mt: 'auto',
        }}
      >
        <Container >
          <FooterContent />
        </Container>
      </Box>
    </Box>
  );
}