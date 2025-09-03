

const AccordionItem=({title,description,isOpenAccordion,setIsOpen})=>{
   return (
    <div style={{marginTop:'10px'}}>
     <div onClick={()=>setIsOpen()} style={{border:'1px solid black',padding:"10px 10px",display:'flex',justifyContent:'space-between', background:'grey',cursor:'pointer'}}>{title}<span>{isOpenAccordion? '↑' : '↓'}</span></div>
    {
      isOpenAccordion && <div style={{border:'1px solid black',padding:"10px 10px"}}>{description}</div>
    } 
     </div>
   )
}

export default AccordionItem