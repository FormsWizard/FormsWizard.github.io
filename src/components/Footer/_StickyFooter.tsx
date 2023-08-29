// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

// function FooterContent() {
//   return (
//     <div class="flex flex-col justify-center">
//        <div class="flex flex-col align-center">
//           <div>
//             <p>
//               {'FormsWizard'}
//               {' '}
//               {new Date().getFullYear()}
//               {''}
//             </p>
//           </div>
//           <div>
//             <p>
//               Funded through:
//             </p>
//           </div>
//         </div>
//       <div class="flex ">
//         <div justifyContent="center" alignItems="center" >
//           <p >
//             <Link color="inherit" href="https://prototypefund.de/">
//               <img src="/src/images/PrototypeLogo/PrototypeFundLogo.png" width="54rem" height="54rem" alt="Logo"></img>
//               Prototype Fund
//             </Link>{' '}
//           </p>
//         </div>

//         <div class="flex align-center">
//           <p>
//             <Link color="inherit" href="https://www.bmbf.de/bmbf/de/home/home_node.html">
//               <img src="/src/images/BundesministeriumLogo/BundesministeriumLogo.png" width="150rem" height="150rem" alt="Logo_Bundesministerium" ></img>
//             </Link>{' '}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function StickyFooterTS() {
//   return (


//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         width: '100%',
//         bottom: 0,
//         position: 'fixed',
//         alignItems: 'center',
//       }}
//     >
//       <CssBaseline />
//       <Box
//         component="footer"
//         sx={{
//           py: 3,
//           px: 30,
//           mt: 'auto',
//         }}
//       >
//         <Container >
//           <FooterContent />
//         </Container>
//       </Box>
//     </Box>
//   );
// }