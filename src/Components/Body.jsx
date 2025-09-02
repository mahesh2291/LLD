import React,{useState,useEffect} from "react"
import Shimmer from "./Shimmer"
import Card from "./Card"

function Body() {
  const [memes, setMemes]=useState([])
  const [isLoading,setIsloading]=useState(false)
  
  useEffect(()=>{
      fetchMemes()

      window.addEventListener("scroll",handleScroll)

      return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

  const handleScroll=()=>{
     if(window.scrollY+window.innerHeight>=document.body.scrollHeight) {
      console.log('bottom')
        fetchMemes()
     }
  }

  const fetchMemes=async()=>{
    setIsloading(true)
     const memesData=await fetch('https://meme-api.com/gimme/20')
     const memesDataJson=await memesData.json()
     setMemes((oldMemes)=>[...oldMemes,...memesDataJson.memes])
    setIsloading(false)
    
  }

  return (
    <>
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
      {memes?.map((meme,i)=>{
        console.log(memes)
        return (
          <Card key={meme.id} author={meme.author} image={meme.url} title={meme.title} />
        )
      })}
      {isLoading && <Shimmer />}
    </div>
    </>
  )
}

export default Body