import React from "react";
import CardDisplay from "../CardDisplay/cardDisplay";

import Heading from "../Heading/heading";
import TrendingCardDisplay from "../trendingDisplay/TrendingCardDisplay";
import VendorDisplay from "../VendorDisplay/vendorDisplay";



const Home = () =>{


    return(
        <>
         <Heading/>
        <CardDisplay/>
        <TrendingCardDisplay/>
        <VendorDisplay/>
        </>
    );
}
export default Home;