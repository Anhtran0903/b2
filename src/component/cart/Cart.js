import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, deleteCart } from '../../redux/cartSlice';
export default function Cart() {
    const {item} =useSelector(state=>state.cart)
    const dispatch = useDispatch();
  return (
    <div>
        <Container>
        <h1>{item.length}        <Button onClick={()=>dispatch(clearCart())} >Xoa tat ca</Button></h1>
        

    
        <Row >
            {
                 
                item.map(item=>(

                    <Card className='TTsp'>
                    <img
                    width={'80px'}
                        alt="Sample"
                        src={item.img}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {item.price}
                        </CardSubtitle>
                       
                        <Button onClick={()=>dispatch(deleteCart(item.id))} >X</Button>
                    </CardBody>
                    
                </Card>
                ))
                  
                
            }
        
        </Row>

         


            </Container>
    </div>
  )
}
