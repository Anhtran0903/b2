import React, { useState } from 'react'
import { Button, Input, ListGroupItem } from 'reactstrap'

export default function Student(props) {

    const {Student} =props
    const {recheck,deleteItem,reName}=props
    const [isopen,setIsopen] =useState(false)  
    const [text,setText]=useState(Student.name);
  return (
    <>
    
    
    <ListGroupItem className='d-flex justify-content-between align-items-center'  >


    <Input type='checkbox' onClick={()=>recheck(Student.id)} checked={Student.check}/>
             

    

    <div className='me-auto'  onClick={()=>recheck(Student.id)} >

        {
            !isopen? <p 
            className=    {Student.check==true? "TT active ": "TT "}  onDoubleClick={()=>setIsopen(true)}>   {Student.name}  </p>:
            <Input value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
                if(e.key =="Enter"){
                    reName(Student.id,text);
                    setIsopen(false)
                }
            }} />
        }
       
          
           </div> 
    <span><Button className='btn btn-danger' onClick={()=>deleteItem(Student.id)}>X</Button></span>


  </ListGroupItem>
    
    
    
    
    
    
    
    
    </>
    





  )
}
