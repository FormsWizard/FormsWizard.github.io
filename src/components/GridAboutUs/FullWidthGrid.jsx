import Grid from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";

//import { Image, Picture } from '@astrojs/image/components';

//display="flex" justifyContent="start" alignItems="start" //rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }} //

//import Avatar4 from "https://i.postimg.cc/x8bxFS7F/Avatar4.png";



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
        <div class="page-main text-[#5660ce]">
            <div class="wrap-element-a">
                <div class="m-0 md:mr-20">
                    <img src="/src/images/Avatare/jO3_.png" width="700rem" alt="Drawing of j03" />
                </div>
                <div>
                    <h3 class="font-semibold text-center md:text-left">jO3</h3>
                    <p class="leading-relaxed text-center md:text-left">is our specialist for backend and a master in security related aspects. From architecture, implementation, project management and communication with first users and funding related wideview - j03  creates the necessary skeleton and outlines for the project. </p>
                </div>
            </div>

            <div class="wrap-element">
                <div>
                    <h3 class="font-semibold text-center md:text-right">winzlieb</h3>
                    <p class="text-center md:text-right">is a passionate programmer who already build up few open source projects next to his main job and his life as a father. He loves to connect his technical expertise with his various fields of manual civic engagement. </p>
                </div>
                <div class="m-0 md:ml-20">
                    <img src="/src/images/Avatare/seb_pic.png" alt="Drawing of WNZ" width="700rem" />
                </div>
            </div>

            <div class="wrap-element-a">
                <div class="m-0 md:mr-20">
                    <img src=" /src/images/Avatare/ja_ob.png"  alt="Drawing of ja_ob" width="500rem"/>
                </div>
                <div>
                    <h3 class="font-semibold text-center md:text-left">ja_ob</h3>
                    <p class="leading-relaxed text-center md:text-left">likes to program and yogurt because it's not crumbly in the keyboard and combines so well. Went from *** to JavaScript to Web-Components to React to FormsWizard.</p>
                </div>
            </div>

            <div class="wrap-element">
                <div>
                    <h3 class="font-semibold text-center md:text-right">sam_</h3>
                    <p class="leading-relaxed text-center md:text-right">is an enthusiast for technology and focuses on its connection to society. As a political scientist, sociology graduate and painter she came to programming via the fascination how tech shapes reality.</p>
                </div>
                <div class="m-0 md:ml-20">
                    <img src="/src/images/Avatare/sam_profil2.png" alt="Drawing of sam" width="650rem" />
                </div>
            </div>
           
        </div>
    );
}