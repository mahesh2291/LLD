import React,{useState,useEffect} from "react"
import Shimmer from "./Shimmer"
import Card from "./Card"

function Body() {
  const [memes, setMemes]=useState([])
  const [isLoading,setIsloading]=useState(false)
  
  useEffect(()=>{
      fetchMemes()
  },[])

  const fetchMemes=async()=>{
    setIsloading(true)
     const memesData=await fetch('https://meme-api.com/gimme/20')
     const memesDataJson=await memesData.json()
     setMemes(memesDataJson.memes)
    setTimeout(()=>{
       setIsloading(false)
    },3000)
  }

  return (
    <>
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
      {isLoading? <Shimmer /> : memes?.map((meme)=>{
        return (
          <Card key={meme.id} author={meme.author} image={meme.url} title={meme.title} />
        )
      })}
    </div>
    </>
  )
}

export default Body