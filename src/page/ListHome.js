import React from 'react'
import Header from '../component/Header'
import Add from '../component/list/Add'
import CatList from '../component/list/CatList'
import { Container } from 'reactstrap'

export default function ListHome() {
  return (
    <div>
      
      <Header/>
      <Container>

      <CatList/>
      </Container>
    </div>
  )
}
