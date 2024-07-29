import React, { useEffect, useState } from 'react'
import { Button, Container, Input, ListGroup } from 'reactstrap'

import Student from './Student';

export default function Students(props) {
    const [data, setData] = useState([

        {
            "name": "Viola Williamson DVM",
            "id": "1",
            "check": false
        },
        {
            "name": "Lynn Batz",
            "id": "2",
            "check": false
        },
        {
            "name": "Laurence Metz PhD",
            "id": "3",
            "check": false
        },
        {
            "name": "Jeff Greenholt",
            "id": "4",
            "check": false
        },
        {
            "name": "Dennis Welch",
            "id": "5"
            , "check": true
        },
        {
            "name": "Jean Conroy",
            "id": "6",
            "check": false
        }

    ]);
    const [text, setText] = useState("");





    useEffect(() => {
        if (localStorage.getItem("list")) {
            setData(JSON.parse(localStorage.getItem("list")))
        }
    }, [])


    const addNew = (text) => {

        let newItem = [...data, { id: data.length++, name: text, check: false }]
        setText("")
        setData(newItem)
        localStorage.setItem("list", JSON.stringify(newItem))

    }
    const recheck = (id) => {
        let newItem = data.map(item => item.id === id ? { ...item, check: !item.check } : item)
        setData(newItem)
        localStorage.setItem("list", JSON.stringify(newItem))
    }

    const deleteItem = (id) => {
        let newItem = data.filter(item => item.id !== id)
        setData(newItem)
        localStorage.setItem("list", JSON.stringify(newItem))
    }


    const reName = (id, text) => {
        let newItem = data.map(item => item.id === id ? { ...item, name: text } : item)
        setData(newItem)
        localStorage.setItem("list", JSON.stringify(newItem))
    }

    const checkAll=()=>{
            
    }
    return (
        <div>

            <Container className='mx-auto'>
                        <h3 className='text-center m-5'>to do list</h3>
                <div className='d-flex mb-5 bg-info w-100 p-2 ' >
                    <Input type='text' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
                        if (e.key == "Enter") {

                            addNew(text)
                        }
                    }} />
                    <span><Button className='m-1' onClick={() => addNew(text)}>add</Button></span>
                </div>
                <ListGroup >
                    {
                        data.map((item, index) => (
                            <Student key={index} Student={item} recheck={recheck} deleteItem={deleteItem} reName={reName} />
                        ))


                    }


                </ListGroup>

                 


            </Container>


        </div>
    )
}
