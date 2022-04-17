import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Row, Col, Card, FloatingLabel, Form } from 'react-bootstrap'

export default function Contact() {

  useEffect(() => {
    document.body.style.background = 'url("https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80") center/100% fixed no-repeat';

    return () => {
      document.body.style.background = 'black';
    }
  }, [])

  return (
    <Container id="contact" >
      <br />
      <Row>
        <Col xs={{span: 8, offset: 2}}>
          <div >
            <Row>
              <Col>
                <FloatingLabel controlId="floatingName" label="Name">
                  <Form.Control type="text" placeholder="Name" />
                </FloatingLabel>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <FloatingLabel controlId="floatingEmail" label="Email">
                  <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <FloatingLabel controlId="floatingTextarea" label="Details">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Button fullWidth size='large' variant="contained" style={{background: 'forestgreen'}} >Say Hi &nbsp;<i className="fa-solid fa-hand-wave"></i></Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
