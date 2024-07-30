import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCat, fetchCats } from '../../redux/catSlice';
import { Button, Table } from 'reactstrap';

export default function CatList() {
    const dispatch = useDispatch()
    const cats = useSelector(state => state.cats.cats)

    useEffect(() => {
        dispatch(fetchCats());
    }, []);


    const handle_delete = (id)=>{
        dispatch(deleteCat(id));
    }
    return (
        <div>

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
           
                                <tr>
        <th scope="row">
          {index}
        </th>
        <td>
       {item.name}
        </td>
        <td>
        {item.id}
        </td>
        <td>
       <Button onClick={()=>handle_delete(item.id)}>X</Button>
        </td>
        </tr>
                            )


                        }

                   

                </tbody>
            </Table>





        </div>
    )
}
