import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <div class="flex items-center">
//       <div>
//         <p>FormsWizard</p>
//         {new Date().getFullYear()}
//         {'.'}
//       </div>
//       <div class="flex items-center">
//         <Link color="inherit" href="https://prototypefund.de/">
//           <img src="/formswizardblog/src/images/PrototypeLogo/PrototypeFundLogo.png" width="1rem" height="1rem" alt="Logo" ></img>
//           PrototypeFund
//         </Link>{' '}
//       </div>
//     </div>
//   );
// }

export default function StickyFooter() {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     width: '100%',
    //     bottom: 0,
    //     position: 'fixed',
    //   }}
    // >
      // <CssBaseline />
      // <Box
      //   component="footer"
      //   sx={{
      //     py: 3,
      //     px: 2,
      //     mt: 'auto',
      //     backgroundColor: (theme) =>
      //       theme.palette.mode === 'light'
      //         ? theme.palette.grey[200]
      //         : theme.palette.grey[800],
      //   }}
      // >
        <Container>
          <Copyright />
        </Container>
    //   </Box>
    // </Box>
  );
}
