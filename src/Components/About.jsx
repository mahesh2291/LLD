import React from "react";
import { lang } from "../assets/Lang";


const About=({lan})=>{
   const data=lang[lan]
   console.log(data)
    return <h1>{data.title}</h1>
}

export default About