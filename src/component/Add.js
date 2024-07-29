import React, { useState } from 'react'
import { Input  } from 'reactstrap'

export default function Add(props) {
    const [text,setText]= useState();
    const {handAdd}=props
  return (
    <div>
        <Input type='text' placeholder='nhap ten'  value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{

        
            if(e.key=="Enter" && text!=""){
                setText("")
                handAdd(text);
            }else{
              alert("vui long nhap ");
            }
        }} />
    </div>
  )
}
