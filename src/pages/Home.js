import React, { Fragment } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import TableComponent from '../components/TableComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Home = () => {
  return (
      <Fragment>
        <NavbarComponent/>  
        <Container>
          <Row>
            <TableComponent/>    
          </Row>
        </Container>
      </Fragment>
  )
}

export default Home