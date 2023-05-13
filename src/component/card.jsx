import React from "react";
import {Card,CardMedia,CardContent,Typography} from "@mui/material";
import "../component/style.css";
import { blueGrey } from "@mui/material/colors";



const MyCard =({imageUrl,title,job,address,description,patronised})=>{

   
    return(
        <>
    <Card sx={{spacing:3}} style={{ display: 'flex' ,height:152, maxWidth:350}}>
      <CardMedia
        component="img"
        alt={title}
        image={imageUrl}
         name={title}
        style={{height: "100%",width:"30%", objectFit: 'cover', alignSelf: 'flex-start' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }} >
        <CardContent style={{ flexGrow: 1}} className="content-first-row" sx={{lineHeight:2}}>
          <Typography variant="subtitle1" component="h1" style={{}}>
            {title}
          </Typography>
          <Typography variant="subtitle2"  color="textSecondary" component="h6" sx={{fontSize: '12px'}}>
            {job}
          </Typography>
          <Typography variant="subtitle2"  color="textSecondary" component="p" sx={{fontSize: '10px'}}>
            {address}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{fontSize: '10px'}}>
            {description}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" sx={{fontSize: '10px',paddingTop:2,color: blueGrey[800]}}>
            {patronised}
          </Typography>
        </CardContent>
      </div>
    </Card>
        </>
    )
}
export default MyCard;