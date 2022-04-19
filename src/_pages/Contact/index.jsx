import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../../_components/Navbar';

export default function Contact() {
  return (
    <div id="contact" >
      <br />
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Container >
        <br />
        <Row>
          <Col xs={{span: 8, offset: 2}}>
            <div >
              <Row>
                <Col>
                  <TextField fullWidth id="standard-basic" label="Name" variant="standard" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <TextField fullWidth id="standard-basic" label="Email" variant="standard" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Details"
                      variant="standard"
                    />
                </Col>
              </Row>
              <br />
              <Row className='mt-2'>
                <Col>
                  <Button size='large' variant="contained" style={{background: 'forestgreen', padding: '1em', width: '200px'}} ><i className="fa-solid fa-hand-wave"></i></Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
