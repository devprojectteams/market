import React from "react";
import { Box,Typography,Grid } from "@mui/material";
import Vendors from "../component/vendors";
import img9 from "../assets/Interview - Copy/row31.png";
import img10 from "../assets/Interview - Copy/row32.png";
import img11 from "../assets/Interview - Copy/row33New.png";

const VendorDisplay = () =>{
    const displays =[
        {
            id:1,
            image:img9,
            title:"Joseph Ali",
            subtitle:"Photograph",
            address:"Shomolu,Lagos",
        },
        {
            id:2,
            image:img10,
            title:"Joseph Ali",
            subtitle:"Photograph",
            address:"Shomolu,Lagos",
        },
        {
            id:3,
            image:img11,
            title:"Joseph Ali",
            subtitle:"Photograph",
            address:"Shomolu,Lagos",
        },
        {
            id:4,
            image:img11,
            title:"Joseph Ali",
            subtitle:"Photograph",
            address:"Shomolu,Lagos",
        },
        {
            id:5,
            image:img11,
            title:"Joseph Ali",
            subtitle:"Photograph",
            address:"Shomolu,Lagos",
        }
    ]
    return(
        <>
          <Box style={{marginTop:20}} >
          <Typography sx={{fontSize: [16,26],fontWeight: [400,600]}}>Trending Vendors</Typography>
        </Box>
        <Grid container spacing={2} style={{marginTop:20}}>
        {displays.map((display) =>(
            <Grid item xs={12} sm={6} md={2.4} key={display.id}>
                    <Vendors 
                        profile={display.image}
                        title={display.title}
                        subtitle={display.subtitle}
                        address={display.address}
                    />
            </Grid>
        ))}
           
        </Grid>
        </>
    );
}
export default VendorDisplay;