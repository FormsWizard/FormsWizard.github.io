import Grid from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

//import { Image, Picture } from '@astrojs/image/components';


//import Avatar4 from "https://i.postimg.cc/x8bxFS7F/Avatar4.png";




const ItemRightAlign = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
}));

const ItemLeftAlign = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'end',
    color: theme.palette.text.secondary,
}));


export default function FullWidthGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
                <Grid xs={6} md={4}>
                    <ItemLeftAlign >
                    <img src=" /src/images/Avatare/ja_ob.png" width="400rem" alt="Avatar1" />
                    </ItemLeftAlign>
                </Grid>
                <Grid xs={6} md={8} mdOffset="auto" >
                    <ItemLeftAlign>
                        <h3 class="font-semibold">ja_ob</h3>
                    </ItemLeftAlign>
                    <ItemLeftAlign>
                        <p>... will say 'hi' in a bit ...</p>
                    </ItemLeftAlign>
                </Grid>
                <Grid xs={6} md={4} display="flex" justifyContent="end" alignItems="end">
                    <ItemRightAlign>
                    <img src="/src/images/Avatare/jO3_.png" width="400rem" alt="Avatar2" />
                    </ItemRightAlign>
                </Grid>
                <Grid xs={6} md={8}>
                    <ItemRightAlign>
                        <h3 class="font-semibold">jO3</h3>
                    </ItemRightAlign>
                    <ItemRightAlign>
                        <p>Specialist for backend and especially security related issues. From architecture, implementation, project management and communication with first users - j03  creates the necessary skeleton and outlines for the project.</p>
                    </ItemRightAlign>
                </Grid>
                <Grid xs={6} md={4} display="flex" justifyContent="start" alignItems="start">
                    <ItemLeftAlign>
                    <img src="https://i.postimg.cc/x8bxFS7F/Avatar4.png"  alt="Avatar3" width="200rem"/>
                    </ItemLeftAlign>
                </Grid>
                <Grid xs={6} md={8} mdOffset="auto">
                    <ItemLeftAlign>
                        <h3 class="font-semibold">sam_</h3>
                        <p class="leading-relaxed">Enthusiast for technology and society - political scientist, sociology graduate and painter - came to programming through an unstoppable curiosity.</p>
                    </ItemLeftAlign>
                </Grid>

                <Grid xs={6} md={4} display="flex" justifyContent="end" alignItems="end">
                    <ItemRightAlign>
                        <img src="https://i.postimg.cc/x8bxFS7F/Avatar4.png" alt="Avatar4" width="200rem" />
                    </ItemRightAlign>
                </Grid>

                <Grid xs={6} md={8}>
                    <ItemRightAlign>
                        <h3 class="font-semibold">winzlieb</h3>
                    </ItemRightAlign>
                    <ItemRightAlign>
                        <p>... will say 'hi' in a bit ...</p>
                    </ItemRightAlign>
                </Grid>
            </Grid>
        </Box>
    );
}