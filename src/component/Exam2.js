import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap'
import { addNew, deleteStudent, recheck } from '../redux/listSlice'
import Add from './Add'

export default function Exam2() {

const handAdd =(text)=>{
    dispatch(addNew(text));
}
const [flag,setFlag]=useState("")

const fielmap=(list,flag)=>{
        if(flag=="checkall"){
            return list.filter(item=>item.checked)
        }else if(flag=="nocheck"){
            return list.filter(item=>!item.checked)
        }
        
        else{
            return list;
        }
}
const dispatch=useDispatch()
const student = useSelector(state=>state.student.student)
  return (
    <div>
      
<Container>
    <Add handAdd={handAdd}/>
<ListGroup>
{
        fielmap(student,flag).map((item,index)=>
                <ListGroupItem className='d-flex justify-content-between' color="success">
                <div className={item.checked ==true ?"TT active": "TT"} key={index}   onClick={()=>dispatch(recheck(item.id))}               >{item.name}          </div>


                <span><Button onClick={()=>dispatch(deleteStudent(item.id))}>X</Button></span>
                </ListGroupItem>
            )
        }
 

        <div className='d-flex justify-content-around'>
        <Button onClick={()=>setFlag("checkall")}>checkall</Button>
        <Button onClick={()=>setFlag("nocheck")}> nocheckall</Button>
        <Button onClick={()=>setFlag("")}>clear</Button>
        </div>
  
</ListGroup>
       
</Container>
    </div>
  )
}
