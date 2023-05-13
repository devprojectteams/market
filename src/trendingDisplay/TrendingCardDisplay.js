import React from "react";
import TrendingCards from "../component/trendingCard";
import img5 from "../assets/Interview - Copy/row21.png"
import img6 from "../assets/Interview - Copy/row22.png";
import img7 from "../assets/Interview - Copy/row23.png";
import img8 from "../assets/Interview - Copy/row24.png";
import { Grid ,Typography,Box} from "@mui/material";





const TrendingCardDisplay = () =>{
    const imageDisplays = [
        {
            id:1,
            image:img5,
            title:"Photgraphy",
            subtitle:"140 vendors around you",
        },
        {
            id:2,
            image:img6,
            title:"Web Development",
            subtitle:"140 vendors around you",
        },
        {
            id:3,
            image:img7,
            title:"Carpentry",
            subtitle:"140 vendors around you",
        },
        {
            id:4,
            image:img8,
            title:"Barbing",
            subtitle:"140 vendors around you",
        },
        {
            id:5,
            image:img8,
            title:"Video Editing",
            subtitle:"140 vendors around you",
        }
    ]
    return(
        <>
        <Box style={{marginTop:20}} >
          <Typography sx={{fontSize: [16,26],fontWeight: [400,600]}}>Trending Services</Typography>
        </Box>
        <Grid container spacing={2} style={{marginTop:20}}>
        {imageDisplays.map((imageDisplay) =>(
            <Grid item xs={12} sm={6} md={2.4} key={imageDisplay.id}>
                    <TrendingCards 
                        imageSrc={imageDisplay.image}
                        title={imageDisplay.title}
                        subtitle={imageDisplay.subtitle}
                    />
            </Grid>
        ))}
           
        </Grid>
        {/* <TrendingCards imageSrc={img5} title="Photography" subtitle="140 vendors around you"/>
        <TrendingCards imageSrc={img6} title="Photography" subtitle="140 vendors around you"/>
        <TrendingCards imageSrc={img7} title="Photography" subtitle="140 vendors around you"/> */}
        {/* <TrendingCards imageSrc={img8} title="Photography" subtitle="140 vendors around you"/> */}
        </>
       
    );
}
export default TrendingCardDisplay;