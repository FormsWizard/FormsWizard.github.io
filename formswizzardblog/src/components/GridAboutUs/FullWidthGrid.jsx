import Grid from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



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
                <Grid xs={6} md={4} display="flex" justifyContent="start" alignItems="start">
                    <ItemLeftAlign>
                        <img src="../images/Avatar1.png" alt="Avatar1" />
                    </ItemLeftAlign>
                </Grid>
                <Grid xs={6} md={8} mdOffset="auto" >
                    <ItemLeftAlign>
                        ja_ob
                    </ItemLeftAlign>
                    <ItemLeftAlign>
                        ... introduction following ...
                    </ItemLeftAlign>
                </Grid>
                <Grid xs={6} md={4} display="flex" justifyContent="end" alignItems="end">
                    <ItemRightAlign>
                        <img src="../images/Avatar2.png" alt="Avatar2" />
                    </ItemRightAlign>
                </Grid>
                <Grid xs={6} md={8}>
                    <ItemRightAlign>
                        <p>jo3</p>
                    </ItemRightAlign>
                    <ItemRightAlign>
                        <p>Project brain for backend and especially security related issues. From architecture, implementation, project management and communication with first users - without j03 the wizard wouldnt be the wizard!</p>
                    </ItemRightAlign>
                </Grid>
                <Grid xs={6} md={4} display="flex" justifyContent="start" alignItems="start">
                    <ItemLeftAlign>
                        <img src="../images/Avatar3.png" alt="Avatar3" />
                    </ItemLeftAlign>
                </Grid>
                <Grid xs={6} md={8} mdOffset="auto">

                    <ItemLeftAlign>
                        <h1>sam</h1>
                        <p>Enthusiast for technology and society - former art and politics student - came to programming through a curiosity that could hardly be stopped</p>
                    </ItemLeftAlign>
                </Grid>

                <Grid xs={6} md={4} display="flex" justifyContent="end" alignItems="end">
                    <ItemRightAlign>
                        <img src="../images/Avatar4.png" alt="Avatar4" />
                    </ItemRightAlign>
                </Grid>
                <Grid xs={6} md={8}>
                    <ItemRightAlign>
                        <p>sebastian</p>
                    </ItemRightAlign>
                    <ItemRightAlign>
                        ... introduction following ...
                    </ItemRightAlign>
                </Grid>
            </Grid>
        </Box>
    );
}