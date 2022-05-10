import React, { useEffect, useState } from 'react'
import ResumePDF from '../../_assets/Resume.pdf'

import { pdfjs } from 'react-pdf';
import { useNavigate } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { animateResumePage } from '../../_helpers/animation';
import { Button, Col, Row, Spinner } from 'react-bootstrap'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export default function Resume() {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    animateResumePage()
  }, [])
  
  const onDocumentLoadSuccess = () => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }

  const handleDownload = () => {
    let link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Matthew_Kim_Resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }

  return (
    <div id='resume'>
      {/* Desktop */}
      <div className='d-none d-lg-flex flex-column align-items-center container'>
        <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          {loading || !ResumePDF ? 
            <Spinner animation='border'/>
            :
            <Page className={'d-flex'} scale={scale} pageNumber={1} />
          }
        </Document>
      </div>
      <Row className='d-none d-lg-flex justify-content-between fixed-bottom bg-light p-2 shadow-lg'>
        <Col xs={{span: 6, offset: 3}} className='text-center'>
          <Button disabled={scale === 2} variant="outline-dark" onClick={() => setScale(2)}>
              <i className={`far fa-search-plus`}></i>
          </Button>
          &nbsp;
          <Button disabled={scale === 1} variant="outline-dark" onClick={() => setScale(1)}>
              <i className={`far fa-search-minus`}></i>
          </Button>
        </Col>
        <Col xs={{span: 'auto'}} className='text-right'>
          <Button variant="outline-success" onClick={handleDownload}>
          <i className="fal fa-download"></i> &nbsp;Download
          </Button>
          &nbsp;
          <Button variant="outline-dark" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Col>
      </Row>

      {/* Mobile */}
      <div className='d-lg-none d-flex h-100 justify-content-center flex-column align-items-center container'>
        <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          {loading || !ResumePDF ? 
            <Spinner animation='border'/>
            :
            <Page scale={.6} pageNumber={1} />
          }
        </Document>
      </div>
      <div className='d-lg-none d-flex justify-content-center fixed-bottom bg-light p-2 shadow-lg'>
          <Button variant="outline-success" onClick={handleDownload}>
          <i className="fal fa-download"></i> &nbsp;Download
          </Button>
          &nbsp;
          <Button variant="outline-dark" onClick={() => navigate(-1)}>
            Back
          </Button>
      </div>
    </div>
  )
}
