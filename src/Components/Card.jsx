import React from "react";


const Card=({title,author,image})=>{
    return (
        <div style={{border:'3px solid black',padding:'10px 10px',borderRadius:'10px',width:'500px',height:'500px',margin:'50px 50px'}}>
            <img style={{margin:'20px 80px'}} src={image} alt="memes" width={'350px'} height={'350px'} />
            <h3>{title}</h3>
            <p><strong>Author-</strong>{author}</p>
        </div>
    )
}


export default Card