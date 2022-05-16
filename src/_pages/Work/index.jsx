import React, { useEffect } from 'react'
import Header from '../../_components/Header';
import Navbar from '../../_components/Navbar';
import ImageGallery from 'react-image-gallery';

import Logo from '../../_assets/axs/Shared/logo@3x.png'
import Welcome from '../../_assets/axs/Shared/welcome-macbook@3x.png'
import MacbookForms from '../../_assets/axs/Shared/MacbookForms@3x.png'
import MacbookEvents from '../../_assets/axs/Shared/MacbookEvents@3x.png'
import MacbookMessages from '../../_assets/axs/Shared/MacbookMessages@3x.png'
import MacbookTelehealth from '../../_assets/axs/Shared/MacbookTelehealth@3x.png'
import DigitalRegistration from '../../_assets/axs/Shared/DigitalRegistration@3x.png'

import { animateWorkPage } from '../../_helpers/animation';
import { Container, Row, Col } from 'react-bootstrap'

export default function Work() {

  useEffect(() => {
    window.scroll(0, 0)
    animateWorkPage()
  }, [])

  const images = [
    {
      original: Logo,
      thumbnail: Logo,
      originalHeight: 500,
      originalClass: 'original__class--logo'
    },
    {
      original: DigitalRegistration,
      thumbnail: DigitalRegistration,
      thumbnailHeight: 50,
      originalHeight: 500,
      thumbnailClass: 'thumbnail__width mx-2'
    },
    {
      original: Welcome,
      thumbnail: Welcome,
      originalHeight: 500,
    },
    {
      original: MacbookForms,
      thumbnail: MacbookForms,
      originalHeight: 500,
    },
    {
      original: MacbookEvents,
      thumbnail: MacbookEvents,
      originalHeight: 500,
    },
    {
      original: MacbookMessages,
      thumbnail: MacbookMessages,
      originalHeight: 500,
    },
    {
      original: MacbookTelehealth,
      thumbnail: MacbookTelehealth,
      originalHeight: 500,
    },
  ];
  
  return <div id='work'>
    <Row>
      <Col lg={{span: 8, offset: 2}} className='text-light'>
        <h1 className='fw-light text-center'>
          Front-End Developer 
          <div className='d-inline-block'>
            &nbsp;@&nbsp;
            <a
              rel='noopener noreferrer'
              href='https://www.axshealthapp.com/'
              target='_blank'
              style={{color: 'yellow'}}
            >
              AxS Health
            </a>
          </div>
        </h1>
        <div className='d-none d-sm-block'>
          <div className='d-flex flex-row justify-content-center mt-3 mb-2'>
            <div><i className='fa-brands fa-js'></i> Javascript&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-react'></i> React&nbsp;&nbsp; </div>
            <div><i className='fa-brands fa-html5'></i> HTML&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-css3'></i> CSS&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-php'></i> PHP&nbsp;&nbsp;</div>
            <div>MySQL</div>
          </div>
          <div className='d-flex flex-row justify-content-center'>
            <p>2020 - present</p>
          </div>
        </div>
        <div className='d-block d-sm-none mt-4'>
          <div className='d-flex flex-row mt-3 justify-content-center'>
            <div><i className='fa-brands fa-js'></i> Javascript&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-react'></i> React&nbsp;&nbsp; </div>
            <div><i className='fa-brands fa-html5'></i> HTML&nbsp;&nbsp;</div>
          </div>
          <div className='d-flex flex-row mb-2 justify-content-center'>
            <div><i className='fa-brands fa-css3'></i> CSS&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-php'></i> PHP&nbsp;&nbsp;</div>
            <div>MySQL</div>
          </div>
          <div className='d-flex flex-row justify-content-center'>
            <p>2020 - present</p>
          </div>
        </div>
      </Col>
    </Row>
    <Row className='my-4'>
      <Col lg={{span: 8, offset: 2}}>
        <div className='mb-4'>
          <div className='d-none d-lg-block'>
            <ImageGallery showPlayButton={false} items={images} showFullscreenButton={false} />
          </div>
          <div className='d-block d-lg-none'>
            <ImageGallery showPlayButton={false} items={images} showFullscreenButton={false} showThumbnails={false} />
          </div>
        </div>
      </Col>
    </Row>
    <Row className='mb-4'>
      <Col xs='12' lg={{span: 6, offset: 3}} className='text-light px-5 px-sm-0'>
        <p>Improved  video chat capabilities on web and mobile platforms using Twilio's video framework.</p>
        <p>Followed the DRY principle when building static websites for clients using Laravel's Jigsaw framework. </p>
        <p>Avoided breaking changes by using Jest to test ui components and implement continuous integration. </p>
        <p>Implemented responsive design patterns on our web platform using bootstrap and CSS media queries. </p>
        <p>Utilized Browserstack to ensure consistency across all major mobile devices.</p>
        <p>Developed components for a private npm package used to share ui components across all platforms.</p>
      </Col>
    </Row>

    <hr className='my-5' />

    <Row className='mt-5'>
      <Col lg={{span: 8, offset: 2}} className='text-light'>
        <h1 className='fw-light text-center d-lg-block d-none'>
          Full-Stack Developer @ Donaldson Arthritis Research Foundation
        </h1>
        <h1 className='fw-light text-center d-lg-none d-block'>
          Full-Stack Developer <br /> <small>@ Donaldson Arthritis Research Foundation</small> 
        </h1>

        <div className='d-none d-sm-block'>
          <div className='d-flex flex-row justify-content-center mt-3 mb-2'>
            <div><i className='fa-brands fa-js'></i> Javascript&nbsp;&nbsp;</div>
            <div>JQuery&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-html5'></i> HTML&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-css3'></i> CSS&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-php'></i> PHP&nbsp;&nbsp;</div>
            <div>MySQL</div>
          </div>
          <div className='d-flex flex-row justify-content-center'>
            <p>2018 - 2020</p>
          </div>
        </div>
        <div className='d-block d-sm-none mt-4'>
          <div className='d-flex flex-row mt-3 justify-content-center'>
            <div><i className='fa-brands fa-js'></i> Javascript&nbsp;&nbsp;</div>
            <div>JQuery&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-html5'></i> HTML&nbsp;&nbsp;</div>
          </div>
          <div className='d-flex flex-row mb-2 justify-content-center'>
            <div><i className='fa-brands fa-css3'></i> CSS&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-php'></i> PHP&nbsp;&nbsp;</div>
            <div>MySQL</div>
          </div>
          <div className='d-flex flex-row justify-content-center'>
            <p>2018 - 2020</p>
          </div>
        </div>
      </Col>
    </Row>
    <Row className='my-4'>
      <Col lg={{span: 8, offset: 2}}>
        <div className='mb-4'>
          <div className='d-none d-lg-block'>
            <ImageGallery showPlayButton={false} items={images} showFullscreenButton={false} />
          </div>
          <div className='d-block d-lg-none'>
            <ImageGallery showPlayButton={false} items={images} showFullscreenButton={false} showThumbnails={false} />
          </div>
        </div>
      </Col>
    </Row>
    <Row className='mb-4 pb-5'>
      <Col xs='12' lg={{span: 6, offset: 3}} className='text-light px-5 px-sm-0'>
        <p>Managed database manipulation and extraction using MySQL. </p>
        <p>Redesigned the UI for several key pages, making it easy to find important patient information. </p>
        <p>Gained experience with the MVC design pattern by creating controllers to fetch and display model data. </p>
        <p>Implemented a messaging system, allowing users to send and receive messages within the DARF application.</p>
        <p>Created a date searchable contact page to list contact information for post surgery patients.</p>
        <p>Scripted a cron-job to email weekly patient reports detailing which patients were missing components. </p>
        <p>Utilized RESTful APIs and Vue's Vuex store to update and retrieve the current application state.</p>
        <p>Added functionality for grouping patients and creating custom flags to filter patients within a group. </p>
        <p>Visualized patient's evaluation data with interactive graphs using the Chart.js library. </p>
        <p>Employed JSON Web Token authentication for user login and authentication. </p>
        <p>Practiced deploying newly written code to the production server with the rocketeer deployment package.</p>
        <p>Worked with AWS to create staging servers, patch server issues and apply code edits.</p>
        <p>Integrated 3rd party development packages using npm and composer. </p>
      </Col>
    </Row>
  </div>
}
