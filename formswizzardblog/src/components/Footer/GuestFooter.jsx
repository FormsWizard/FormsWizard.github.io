import * as React from "react";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function GuestFooter() {
    return (
      <Paper sx={{marginTop: 'calc(10% + 60px)',
      width: '100%',
      position: 'fixed',
      bottom: 0,
      width: '100%'
      }} component="footer" square variant="outlined">
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my:1
            }}
          >
              <div>
              </div>
          </Box>
  
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      { 'FormsWizard'}
      {new Date().getFullYear()}
      {'.'}
      <br></br>
      <Link color="inherit" href="https://prototypefund.de/">
      <img src="/formswizzardblog/src/images/PrototypeLogo/PrototypeFundLogo.png" width="1rem" height="1rem" alt="Logo" ></img>
        PrototypeFund
      </Link>{' '}
    </Typography>
          </Box>
        </Container>
      </Paper>
    );
  }