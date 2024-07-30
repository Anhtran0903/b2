import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Nav, Navbar, NavbarBrand, Row } from 'reactstrap';
import { fetchApi } from '../../redux/productSlice';
import { addCart } from '../../redux/cartSlice';

export default function Products() {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products.products)
    const { items, status, error } = useSelector(state => state.products)
    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchApi());
        }

    }, []);

    if (status == 'loading') return <div>loading...</div>
    if (status == 'faild') return <div>{error}</div>
    return (
        <>

                       <p className='text-end m-5'>   cart   </p>

            <Container>
               
                      

              
                <div>
                    <h1 className='text-center'>danh sach </h1>

                    <Row>
                        {
                            items.map((item, index) =>

                                <Col sm={3} md={2} lg={3}>
                                <Card className='TTsp'>
                                    <img
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
                                       
                                        <Button onClick={()=>dispatch(addCart(item, index))}>
                                            Button
                                        </Button>
                                    </CardBody>
                                    <div key={index}></div>
                                </Card>
                                </Col>
                            )}




                    </Row>
                </div>
            </Container>

        </>
    )
}
