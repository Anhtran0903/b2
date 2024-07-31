import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from 'reactstrap'
import { addNewCat } from '../../redux/catSlice';

export default function Add() {
  const dispatch = useDispatch()
  const [text,setText]=useState();
 
  const handle_add =(text)=>{
    dispatch( addNewCat(text));
  }
  return (
    <div>
        


        <Input type='text' placeholder='nhap ten' value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
          if(e.key=="Enter"){
      handle_add({name:text,checked:false});
      setText("");
          }
        }} />
    </div>
  )
}
