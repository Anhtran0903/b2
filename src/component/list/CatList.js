import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCat, fetchCats, reCheckCat } from '../../redux/catSlice';
import { Button, Container, Table } from 'reactstrap';
import Add from './Add';

export default function CatList() {
    const dispatch = useDispatch()
    const cats = useSelector(state => state.cats.cats)

    useEffect(() => {
        dispatch(fetchCats());
    }, []);


    const handle_delete = (id) => {
        dispatch(deleteCat(id));

    }
    const  handle_recheck =(id)=>{
        dispatch( reCheckCat(id));
     

    }
    return (
        <div>

            <Container>
        <Add/>
                <Table
                    dark
                    responsive
                >
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Username
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cats.map((item, index) =>

                                <tr className={item.checked==true? "TTa active": "TTa"}  >
                                    <th scope="row">
                                        {index}
                                    </th>
                                    <td>
                                        <p onClick={()=>handle_recheck(item)}>  {item.name}</p>
                                      
                                    </td>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        <Button onClick={() => handle_delete(item.id)}>X</Button>
                                    </td>
                                </tr>
                            )


                        }



                    </tbody>
                </Table>



                </Container >

        </div>
       
    )
}
