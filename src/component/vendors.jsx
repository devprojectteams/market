import React from "react";
import{Card,CardMedia,CardContent,Typography,Box} from "@mui/material";

const Vendors = ({profile,title,subtitle,address}) =>{
    return(
        <>
        <Card className="d-card">
          <Box className="myBox">
          <CardMedia
            component="img"
            height="200"
            image={profile}
            alt="Image"
            className="myImage"
          />
        
          </Box>
          
          
         <CardContent className="content-card">
            <Typography variant="h5" component="h2" className="title">
                {title}
            </Typography>
            <Typography variant="subtitle1"  component="p" color="textSecondary" className="subtitle">
                {subtitle}
            </Typography>
            <Typography variant="subtitle2" component="p" color="textSecondary" className="address">
                {address}
            </Typography>
    
         </CardContent>
        </Card> 
        </>
    );
}
export default Vendors;