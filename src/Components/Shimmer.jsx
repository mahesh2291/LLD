import React from "react";


const Shimmer=()=>{
    return Array(20).fill(0).map((n,i)=>(
<div key={i} style={{border:'3px solid black',padding:'10px 10px',borderRadius:'10px',width:'500px',height:'500px',margin:'50px 50px'}}>
            
            <div  style={{margin:'20px 80px',background:'gray',height:'350px',width:'350px'}}>

            </div>
            <div style={{background:'gray'}} ><h3 style={{visibility:'hidden'}}>s</h3></div>
            
            <div style={{background:'gray'}} ><p style={{visibility:'hidden'}}>s</p></div>
        </div>
    ))
}


export default Shimmer