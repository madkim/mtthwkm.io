import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import BishopImg from '../../_assets/bishop2.JPG'
import { Container, Row, Col, FloatingLabel, Form } from 'react-bootstrap'

export default function Contact() {

  useEffect(() => {
    document.body.style.backgroundImage = `url(${BishopImg})`;
    document.body.style.backgroundSize = `cover`;

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
                <Button fullWidth size='large' variant="contained" style={{background: 'forestgreen', padding: '1em'}} ><i className="fa-solid fa-hand-wave"></i></Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
