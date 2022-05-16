import { Outlet } from 'react-router-dom'
import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// import Footer from '../../_components/Footer'
import Navbar from '../../_components/Navbar'
import Header from '../../_components/Header'

class MainLayout extends Component {
  render() {
    return ( <Container>
      <div className='mb-4' style={{height: '180px'}}>
        <Row className='mt-4 d-lg-flex d-none header--container'>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row className='mt-4 navbar--container'>
          <Col>
            <Navbar />
          </Col>
        </Row>
      </div>
      <Outlet />
    </Container>
    )
  }
}

export default MainLayout
