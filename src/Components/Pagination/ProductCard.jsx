const Product=({title,brand,thumbnail})=>{
    return (
        <div style={{border:'2px solid black' , width:'350px', padding:'20px', marginLeft:'20px',marginTop:'20px', textAlign:'center'}}>
          <img alt="img" src={thumbnail} />
          <h4>{title}</h4>
          <p>{brand}</p>
        </div>
    )
}

export default Product