import { useEffect, useState } from "react"
import ProductCard from './ProductCard'

const LIMIT=10

const Pagination=()=>{
    const [products,setProducts]=useState([])
    const [page,setPage]=useState(0)
    const [numberOfPages,setNumberOfPages]=useState(0)

    useEffect(()=>{
        fetchProducts()
    },[page])

    const fetchProducts=async()=>{
        try {
           const data=await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${page * LIMIT}&select=title,id,brand,thumbnail`)
           
            const dataJson=await data.json()

            setProducts(dataJson.products)
            setNumberOfPages(Math.ceil(dataJson.total/LIMIT))
       
        } catch (err) {
            console.error(err)
        }
    }
     return (
        <>
        <div style={{display:'flex',flexWrap:'wrap'}}>
           {
            products?.map((product)=> <ProductCard key={product.id}
             {...product}
            />)
           }
        </div>
        <div style={{cursor:'pointer',padding:'20px',textAlign:'center'}}>
          
            <span  onClick={()=>setPage((page)=>page<=0? 0 : page-1)}>PREV</span>
           {
            [...Array(numberOfPages).keys()].map((pN)=><span onClick={()=>setPage(pN)} style={{marginLeft:'20px'}}>{pN===page?<strong>{pN+1}</strong> : pN+1}</span>)
           }
             <span onClick={()=>setPage((page)=>page>= numberOfPages-1? numberOfPages-1 : page+1)} style={{marginLeft:'20px'}}>NEXT</span>
        </div>
        </>
     )
}

export default Pagination