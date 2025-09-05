import { useEffect, useState } from "react"

const images=[
    "https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_img_6122.jpg",
    "https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_img_5948.jpg",
    "https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg"
]

const ImageSlider=()=>{
    const [active,setActive]=useState(0)

    useEffect(()=>{
        const timer=setInterval(()=>{
          nextImage()
        },[3000])

        return ()=>clearInterval(timer)
    })

    const nextImage=()=>{
    setActive((active)=> active>=images.length-1? 0 : active+1)
}

   const prevImage=()=>{
   setActive((active)=> active<=0? images.length-1 : active-1)
   }
     return (
        <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
            <button onClick={()=>prevImage()}>PrevImage</button>
           <img alt='Slider' src={images[active]} />
             <button onClick={()=>nextImage()}>NextImage</button>
        </div>
     )
}

export default ImageSlider