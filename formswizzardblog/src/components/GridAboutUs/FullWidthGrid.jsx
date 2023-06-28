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
                <div >
                    <img class="w-30 md:w-52 lg:w-98" src=" /src/images/Avatare/ja_ob.png"  alt="Avatar1" />
                </div>
                <div>
                    <h3 class="font-semibold text-center md:text-left">ja_ob</h3>
                    <p class="leading-relaxed text-center md:text-left">... will say 'hi' in a bit ...</p>
                </div>
            </div>
            <div class="wrap-element">
                <div>
                    <h3 class="font-semibold text-center md:text-right">jO3</h3>
                    <p class="leading-relaxed text-center md:text-right">Specialist for backend and especially security related issues. From architecture, implementation, project management and communication with first users - j03  creates the necessary skeleton and outlines for the project.</p>
                </div>
                <div>
                    <img src="/src/images/Avatare/jO3_.png" width="400rem" alt="Avatar2"/>
                </div>
            </div>
            <div class="wrap-element-a">
                <div>
                    <img src="https://i.postimg.cc/x8bxFS7F/Avatar4.png" alt="Avatar3" width="200rem" />
                </div>
                <div>
                    <h3 class="font-semibold text-center md:text-left">sam_</h3>
                    <p class="leading-relaxed text-center md:text-left">Enthusiast for technology and society - political scientist, sociology graduate and painter - came to programming via the fascination how tech shapes reality.</p>
                </div>
            </div>
            <div class="wrap-element">
                <div>
                    <h3 class="font-semibold text-center md:text-right">winzlieb</h3>
                    <p class="text-center md:text-right">is a programmer and works on databases in various contexts. He is also a proud father and enjoys spending his free time in the garden.</p>
                </div>
                <div>
                    <img src="/src/images/Avatare/seb_pic.png" alt="Avatar4" width="400rem" />
                </div>
            </div>
        </div>
    );
}