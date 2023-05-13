import React from "react";
import{Card,Typography,CardMedia} from "@mui/material";
// import{Box} from "@mui/material"
// import { styled } from '@mui/system';
import "../component/style.css"




const TrendingCards = ({ imageSrc, title,subtitle }) =>{
    
    return(
        <>
            
             <Card className="mycard">
                 <CardMedia className="media"
                  component="img"
                  alt={title}
                  name={title}
                  image={imageSrc}/>
                    <div className="content">
                        <Typography variant="h6" component="h2" className="content-header">
                            {title}
                        </Typography>
                        <Typography variant="h6" component="h2" className="content-subtitle">
                            {subtitle}
                        </Typography>
                    </div>
                   
    
         </Card>  
        </>
    );
}
export default TrendingCards;