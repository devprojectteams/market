import React from "react";
import { Grid, Typography,Box } from "@mui/material";
import MyCard from "../component/card";
import img from "../assets/Interview - Copy/row11.png";
import img2 from "../assets/Interview - Copy/row12.png";
import img3 from "../assets/Interview - Copy/row13.png";
import img4 from "../assets/Interview - Copy/row14.png"

const CardDisplay = ()=>{
    // imageUrl,title,job,address,description,patronised
    const cards=[
            {
                id:1,
                imageUrl:img,
                title:"Jeremiah Isong",
                job:"Photographer",
                address:"Shomolu,lagos",
                description:"I take fire pictures,check out my portfolio and contact me via email",
                patronised:"patronised by",
                
            },
            {
                id:2,
                imageUrl:img2,
                title:"Ope Adeyemi",
                job:"Software Developer",
                address:"Shomolu,lagos",
                description:"I take fire pictures,check out my portfolio and contact me via email",
                patronised:"patronised by",
                
            },
            {
                id:3,
                imageUrl:img3,
                title:"Samuel Tubman",
                job:"Graphic designer",
                address:"Shomolu,Lagos",
                description:"I take fire pictures,check out my portfolio and contact me via email",
                patronised:"patronised by",
                
            },
            {
                id:4,
                imageUrl:img4,
                title:"Joseph Ali",
                job:"Plumber",
                address:"Shomolu,Lagos",
                description:"I take fire pictures,check out my portfolio and contact me via email",
                patronised:"patronised by",
                
            },
    ]
    return(
        <>
        <Box style={{marginTop:20}} >
          <Typography sx={{fontSize: [16,26],fontWeight: [400,600]}}>Recommended Vendors</Typography>
        </Box>
         
        <Grid container spacing={2} style={{paddingTop:20}}>
            {cards.map((card) => (
            <Grid key={card.id} item xs={12} sm={6} md={3}>
                    <MyCard 
                        imageUrl={card.imageUrl}
                        title={card.title}
                        job={card.job}
                        address={card.address}
                        description={card.description}
                        patronised={card.patronised}
                     />
            </Grid>
      ))}
        </Grid>
        </>
    );
}
export default CardDisplay;