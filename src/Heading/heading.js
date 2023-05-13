import React from "react";

import{Grid,Typography,Link} from "@mui/material";
import { blue } from "@mui/material/colors";

const Heading =()=>{
    return(
     <>
        <Grid container direction="column" alignItems="left" style={{marginTop:10}}>
           <Typography variant="h4" component="h1" gutterBottom sx={{fontSize: [20,37],fontWeight: [400,600]}}>
                  MarketPlace
           </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{fontSize: [16,18],fontWeight: [400,400]}}>
               Find and access vendors and services from Workstedi today
          </Typography>
          <Link href="https://example.com" variant="body1" sx={{fontSize: [14,16],fontWeight: [400,600],color: blue[500]}}>
                See all service categories
         </Link>
        </Grid>
    </>
    );
}
export default Heading;