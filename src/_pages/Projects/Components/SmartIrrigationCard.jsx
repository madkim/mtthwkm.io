import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import ReactPlayer from 'react-player'
import UI_Design from '../../../_assets/slugsense/UI_Design.jpeg'
import DeviceOuter from '../../../_assets/slugsense/outer.png'
import DeviceInner from '../../../_assets/slugsense/inner.png'
import SlugsenseCover from '../../../_assets/slugsense/ArchitectureUserBigger.jpg'
import SmartIrrigationDemo from '../../../_assets/slugsense/SlugSenseDemoSmall.mov'
import { Image, Row, Col } from 'react-bootstrap'

export default function SmartIrrigationCard({ step, showDetails, handleShowDetails }) {
  const smartIrrigationRef = useRef(null)

  useEffect(() => {
    switch (step) {
      case 0: 
        smartIrrigationRef.current.style.transform = 'translateX(0vw)'
        break;
      case 1:
        smartIrrigationRef.current.style.opacity = 1
        smartIrrigationRef.current.style.transform = 'translateX(-32vw)'
        break;
      case 2:
        smartIrrigationRef.current.style.opacity = 0
        smartIrrigationRef.current.style.transform = 'translateX(-64vw)'
        break; 
      case 3:
        smartIrrigationRef.current.style.opacity = 0
        smartIrrigationRef.current.style.transform = 'translateX(64vw)'
        break; 
      case 4:
        smartIrrigationRef.current.style.opacity = 1
        smartIrrigationRef.current.style.transform = 'translateX(32vw)'
        break; 
      default:
        break;
    }
  }, [step])

  const projectCard = classNames('project__card', {
    'project__card--show': showDetails && step === 0,
    'project__card--active': step === 0,
  })

  return (
    <div ref={smartIrrigationRef} onClick={handleShowDetails} className={projectCard}>
      <Image
        src={SlugsenseCover}
        style={{ borderRadius: '1.5em 1.5em 0 0', height: 'auto', width: '100%' }}
      />
      <div className='project__card--details p-3'>
        <div className='d-flex justify-content-between flex-row'>
          <h5>Smart Irrigation (UCSC Capstone Project)</h5>
          <b>2017</b>
        </div>
        <div className='d-flex flex-row justify-content-start mb-1' style={{fontSize: 12}}>
          <div><i className="fab fa-swift"></i> Swift&nbsp;&nbsp;</div>
          <div><i className='fa-brands fa-html5'></i> HTML&nbsp;&nbsp;</div>
          <div><i className='fa-brands fa-css3'></i> CSS&nbsp;&nbsp;</div>
        </div>
        <p style={{fontSize: '1.8vh'}}>The focus of the Smart Irrigation project is to help users reduce water consumption in gardens, greenhouses, and farms. By placing our nodes in the soil, users can learn about the specific conditions their plants are experiencing, such as moisture, humidity, temperature and sunlight.</p>

        {showDetails && step === 0 && (
          <Row>
            <hr />
            <Col>
              <h5 >Summary</h5>
              <ul>
                <li>Developed an iOS app in Swift that provides users with hourly readings regarding their plant's surrounding temperature, moisture, air humidity and sunlight.</li>
                <li>Visualized temperature, moisture, air humidity and sunlight readings over the last 24 hours enabling users to identify if their plants are within their ideal ranges using the Charts API.</li>
                <li>Created a gridview to aid users in selecting any of their devices quickly to obtain details regarding their plant.</li>
                <li>
                  <b>More Info:</b>&nbsp;
                  <a rel='noopener noreferrer' className='text-warning' href='https://devpost.com/software/slugsense' target='_blank'>https://devpost.com/software/slugsense</a>
                </li>
              </ul>
            </Col>
            <Col xs='12' className='mb-5'>
              <ReactPlayer url={SmartIrrigationDemo} controls width='100%' height='100%'/>
            </Col>
            <Col>
              <div className='d-flex flex-column h-100' style={{justifyContent: 'space-evenly'}}>
                <div>
                  <h5 className='m-0'>Overview</h5>
                  <p>Smart Irrigation aims to address the growing importance of conserving water wherever possible, with a focus on using water more efficiently in gardens, greenhouses, and farms. We set out to create a feedback system consisting of both hardware and software, which allows users to make informed decisions regarding the use of natural resources in landscaping, gardening, and agriculture based on aggregated data from attached sensors, thus leading to increased yield and efficient use of natural resources.</p>
                </div>
                <div>
                  <h5 className='m-0'>Abstract</h5>
                  <p>The focus of the Smart Irrigation project is to help users reduce water consumption in gardens, greenhouses, and farms. By placing our nodes in the soil, users can learn about the specific conditions their plants are experiencing, such as moisture, humidity, temperature and sunlight.</p>
                  <p>Our iOS and web interfaces present key information at a glance, providing a simple and intuitive user experience. Our nodes are extremely power efficient and inexpensive to produce, allowing for economically feasible scalability.</p>
                </div>
                <div>
                  <h5 className='m-0'>Approach</h5>
                  <p>User's data is collected from each node and pushed to a PostgreSQL database. It is then pulled and displayed on either their iOS or web app. We decided that a relational database model would be the most effective in organizing nodes and the data collected, as well as relating these nodes to their user.</p>
                  <p>On the web and iOS app, nodes are displayed using a simple grid layout. Each node on this layout displays critical information so that a user can quickly identify if a plant needs immediate attention. Additionally, a historical graph provides insight into a node's readings over time such as the moisture reading for the last 24 hours.</p>
                </div>
                <div>
                  <h5 className='m-0'>Architecture</h5>
                  <p>Each node is deployed in a plant's surrounding soil. Moisture, humidity, temperature, and sunlight data is gathered from each deployed node. This data is stored in our database and served to the owner of that plant via web and mobile applications. Nodes connect to the internet via WiFi and automatically push their readings to the database at specified time intervals.</p>
                </div>
                <div>
                  <h5 className='m-0'>Results</h5>
                  <p>Our team was able to develop a server solution to edit, store, and serve data collected from our hardware nodes. We also developed web and mobile applications to display data gathered from plants and give at-a-glance feedback about the state of those plants.</p>
                </div>
                <div>
                  <h5 className='m-0'>Hardware</h5>
                  <p>Each node has sensors for moisture, light, temperature, and humidity. The nodes transmit their readings directly to our database.</p>
                </div>
                <div>
                  <h5 className='m-0'>Acknowledgements</h5>
                  <p>We'd like to thank Kevin Bell for giving us the opportunity to further develop Smart Irrigation. We'd also like to thank Babandeep Singh for giving us guidance and technical help through developing and building hardware modules. Finally, we'd like to thank Professor Jullig and Morteza Behrooz for their guidance throughout the project.</p>
                </div>
              </div>
            </Col>
            <Col>
              <Row className='mb-3'>
                <Col xs='12'>
                  <Image
                    src={UI_Design}
                    style={{width: '100%'}}
                  />
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col>
                  <Image
                    src={DeviceOuter}
                    style={{width: '100%'}}
                  />
                </Col>
                <Col>
                  <Image
                    src={DeviceInner}
                    style={{width: '100%'}}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </div>
    </div>
  )
}
