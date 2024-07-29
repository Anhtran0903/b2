import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap'
import { addNew, deleteStudent, recheck } from '../redux/listSlice'
import Add from './Add'

export default function Exam2() {

const handAdd =(text)=>{
    dispatch(addNew(text));
}
const dispatch=useDispatch()
const student = useSelector(state=>state.student.student)
  return (
    <div>
      
<Container>
    <Add handAdd={handAdd}/>
<ListGroup>
{
            student.map((item,index)=>
                <ListGroupItem className='d-flex justify-content-between' color="success">
                <div className={item.checked ==true ?"TT active": "TT"} key={index}   onClick={()=>dispatch(recheck(item.id))}               >{item.name}          </div>


                <span><Button onClick={()=>dispatch(deleteStudent(item.id))}>X</Button></span>
                </ListGroupItem>
            )
        }
 




  
</ListGroup>
       
</Container>
    </div>
  )
}
