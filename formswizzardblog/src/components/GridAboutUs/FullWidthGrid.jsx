import Grid from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";

//import { Image, Picture } from '@astrojs/image/components';

//display="flex" justifyContent="start" alignItems="start" //rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }} //

//import Avatar4 from "https://i.postimg.cc/x8bxFS7F/Avatar4.png";




const ItemRightAlign = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    itemAling: 'start',
    color: theme.palette.text.secondary,
}));

const ItemLeftAlign = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'end',
    itemAling: 'end',
    color: theme.palette.text.secondary,
}));


export default function FullWidthGrid() {
    return (

        <Grid container spacing={2}>

            <Grid xs={4} md={3}>
                <Container>
                    <img src=" /src/images/Avatare/ja_ob.png" width="350rem" alt="Avatar1" />
                </Container>
            </Grid>

            <Grid xs={6} md={4}>
                <Container>
                    <h3 class="font-semibold">ja_ob</h3>
                </Container>
                <Container>
                    <p class="leading-relaxed">... will say 'hi' in a bit ...</p>
                </Container>
            </Grid>



            <Grid xs={4} md={3}>
                <Container>
                    <img src="/src/images/Avatare/jO3_.png" width="400rem" alt="Avatar2" />
                </Container>
            </Grid>
            <Grid xs={6} md={4}>
                <Container>
                    <h3 class="font-semibold">jO3</h3>
                </Container>
                <Container>
                    <p class="leading-relaxed">Specialist for backend and especially security related issues. From architecture, implementation, project management and communication with first users - j03  creates the necessary skeleton and outlines for the project.</p>
                </Container>
            </Grid>


            <Grid xs={4} md={3} >
                <ItemRightAlign>
                    <img src="https://i.postimg.cc/x8bxFS7F/Avatar4.png" alt="Avatar3" width="200rem" />
                </ItemRightAlign>
            </Grid>
            <Grid xs={6} md={4}>
                <ItemRightAlign>
                    <h3 class="font-semibold">sam_</h3>
                    <p class="leading-relaxed">Enthusiast for technology and society - political scientist, sociology graduate and painter - came to programming via the fascination how tech shapes reality.</p>
                </ItemRightAlign>
            </Grid>

         

            <Grid xs={4} md={3} display="flex" justifyContent="end" alignItems="end">
                <ItemRightAlign>
                    <img src="/src/images/Avatare/seb_pic.png" alt="Avatar4" width="400rem" />
                </ItemRightAlign>
            </Grid>

            <Grid xs={6} md={4}>
                <ItemRightAlign>
                    <h3 class="font-semibold">winzlieb</h3>
                </ItemRightAlign>
                <ItemRightAlign>
                    <p>... will say 'hi' in a bit ...</p>
                </ItemRightAlign>
            </Grid>
        </Grid>
    );
}