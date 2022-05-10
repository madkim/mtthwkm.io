import React, { useEffect } from 'react'
import ImageGallery from 'react-image-gallery';
import { animateWorkPage } from '../../_helpers/animation';
import { Container, Row, Col } from 'react-bootstrap'

export default function Work() {

  useEffect(() => {
    animateWorkPage()
  }, [])

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  
  return <Container id='work'>
    <br />
    <Row>
      <Col className='text-light'>
        <h1 className='fw-light'>
          Front-End Developer @ &nbsp;
          <a
            rel='noopener noreferrer'
            href='https://www.axshealthapp.com/'
            target='_blank'
            style={{color: 'yellow'}}
          >
            AxS Health
          </a>
        </h1>
        <div className='d-flex flex-row justify-content-between mb-3 border-bottom'>
          <h5 className='lead'><i className='fa-brands fa-react'></i> Javascript React</h5>
          <h5 className='lead'>2020 - present</h5>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non scelerisque est. Fusce hendrerit eros ac sapien efficitur, et commodo metus auctor. Suspendisse vitae nisl efficitur, hendrerit neque nec, aliquam neque. Maecenas ultricies consectetur magna ut viverra. Ut quis ligula vestibulum, tempus tortor nec, egestas lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam euismod lorem suscipit est interdum, quis placerat odio ornare. Vivamus sagittis, libero ut tincidunt hendrerit, dolor purus bibendum lacus, quis suscipit nulla mauris et nibh. Donec hendrerit semper pulvinar. Sed eleifend elit id ornare scelerisque. Curabitur lectus erat, eleifend sit amet aliquet id, volutpat a magna. Duis placerat efficitur ligula, nec placerat magna molestie in. Vestibulum eu tortor pretium, pretium mi quis, commodo magna. Cras a ex metus. Quisque commodo congue interdum.
        </p>

        <p>
          Vivamus non lacus orci. Morbi consectetur mi orci, vel pharetra sem ultricies eget. Aenean tempor lectus dui, in faucibus dolor sodales at. Curabitur eu leo vel neque consectetur eleifend. Pellentesque semper justo sed lorem iaculis lobortis. Donec vulputate sapien eget nisl luctus, vitae fermentum turpis sagittis. Nullam lacinia commodo dui, vel consectetur magna congue non. Phasellus eget mauris erat. Ut quis gravida nulla, nec posuere ligula. In nulla metus, consequat et leo vel, consequat dictum tortor. Fusce semper velit felis, at tristique mi pulvinar non.
        </p>

        <p>
          Cras pulvinar lectus id nisl ultricies, a lacinia dolor rhoncus. Cras porttitor bibendum mauris quis porta. Duis ultrices justo ut nibh ullamcorper, eu vulputate nibh tristique. Etiam id massa a leo interdum rutrum vulputate et augue. Mauris libero augue, finibus ac viverra sed, vulputate nec est. Aliquam sit amet commodo nisi, quis lacinia est. Integer rutrum sapien lacus, facilisis pellentesque ante elementum at. Ut nisl metus, convallis id ultricies sit amet, tristique fermentum nunc.
        </p>

        <p>
          In congue lectus eget pulvinar condimentum. Ut sit amet malesuada ligula. In lorem nisl, convallis sed orci in, vulputate gravida elit. Fusce mollis iaculis ultrices. Etiam quis tristique massa. Vestibulum ut massa urna. Integer semper ac eros sit amet luctus. Suspendisse molestie bibendum libero in molestie. Etiam et iaculis turpis.
        </p>

        <p>
          Donec tempor luctus ipsum id feugiat. Sed fermentum metus ultricies libero pharetra, non finibus diam sodales. Curabitur viverra, dolor vitae efficitur aliquam, mauris sem sollicitudin elit, in consectetur tortor ex eget justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vestibulum dignissim dolor, vitae sollicitudin elit pretium nec. Cras vestibulum cursus turpis at viverra. Aenean id eleifend urna, ut ornare dolor. Fusce vitae velit quis quam aliquam lobortis in eu erat. Pellentesque ex justo, sollicitudin vitae nibh eget, euismod posuere diam. Proin purus odio, hendrerit vel velit ac, pharetra maximus tortor. Maecenas eget nulla enim. Curabitur ut neque felis. Nulla a velit suscipit, blandit erat ac, pulvinar mauris. Nulla consectetur lacus eget lorem fermentum tincidunt.
        </p>
      </Col>
      <Col>
        <div className='position-sticky mb-4' style={{ top: '15em' }}>
          <ImageGallery items={images} />
        </div>
      </Col>
    </Row>
    
    <br />
    <Row className='mt-5'>
      <Col>
        <div className='position-sticky' style={{ top: '15em' }}>
          <ImageGallery items={images} />
        </div>
      </Col>
      <Col className='text-light'>
        <h1 className='fw-light'>
          Full-Stack Developer @ Donaldson Arthritis Research Foundation
        </h1>
        <div className='d-flex flex-row justify-content-between mb-3 border-bottom'>
          <div className='fw-light'>
            <p>
             Front-End: <i className='fa-brands fa-js'></i> Javascript,
              JQuery, <i className='fa-brands fa-html5'></i> HTML,{' '}
              <i className='fa-brands fa-css3'></i> CSS
            </p>
            <p>
             Back-End: <i className='fa-brands fa-laravel'></i> Laravel,{' '}
              <i className='fa-brands fa-php'></i> PHP
            </p>
            <p>
             Database: MySQL
            </p>
          </div>
          <h5 className='lead'>2018 - 2020</h5>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non scelerisque est. Fusce hendrerit eros ac sapien efficitur, et commodo metus auctor. Suspendisse vitae nisl efficitur, hendrerit neque nec, aliquam neque. Maecenas ultricies consectetur magna ut viverra. Ut quis ligula vestibulum, tempus tortor nec, egestas lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam euismod lorem suscipit est interdum, quis placerat odio ornare. Vivamus sagittis, libero ut tincidunt hendrerit, dolor purus bibendum lacus, quis suscipit nulla mauris et nibh. Donec hendrerit semper pulvinar. Sed eleifend elit id ornare scelerisque. Curabitur lectus erat, eleifend sit amet aliquet id, volutpat a magna. Duis placerat efficitur ligula, nec placerat magna molestie in. Vestibulum eu tortor pretium, pretium mi quis, commodo magna. Cras a ex metus. Quisque commodo congue interdum.
        </p>

        <p>
          Vivamus non lacus orci. Morbi consectetur mi orci, vel pharetra sem ultricies eget. Aenean tempor lectus dui, in faucibus dolor sodales at. Curabitur eu leo vel neque consectetur eleifend. Pellentesque semper justo sed lorem iaculis lobortis. Donec vulputate sapien eget nisl luctus, vitae fermentum turpis sagittis. Nullam lacinia commodo dui, vel consectetur magna congue non. Phasellus eget mauris erat. Ut quis gravida nulla, nec posuere ligula. In nulla metus, consequat et leo vel, consequat dictum tortor. Fusce semper velit felis, at tristique mi pulvinar non.
        </p>

        <p>
          Cras pulvinar lectus id nisl ultricies, a lacinia dolor rhoncus. Cras porttitor bibendum mauris quis porta. Duis ultrices justo ut nibh ullamcorper, eu vulputate nibh tristique. Etiam id massa a leo interdum rutrum vulputate et augue. Mauris libero augue, finibus ac viverra sed, vulputate nec est. Aliquam sit amet commodo nisi, quis lacinia est. Integer rutrum sapien lacus, facilisis pellentesque ante elementum at. Ut nisl metus, convallis id ultricies sit amet, tristique fermentum nunc.
        </p>

        <p>
          In congue lectus eget pulvinar condimentum. Ut sit amet malesuada ligula. In lorem nisl, convallis sed orci in, vulputate gravida elit. Fusce mollis iaculis ultrices. Etiam quis tristique massa. Vestibulum ut massa urna. Integer semper ac eros sit amet luctus. Suspendisse molestie bibendum libero in molestie. Etiam et iaculis turpis.
        </p>

        <p>
          Donec tempor luctus ipsum id feugiat. Sed fermentum metus ultricies libero pharetra, non finibus diam sodales. Curabitur viverra, dolor vitae efficitur aliquam, mauris sem sollicitudin elit, in consectetur tortor ex eget justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vestibulum dignissim dolor, vitae sollicitudin elit pretium nec. Cras vestibulum cursus turpis at viverra. Aenean id eleifend urna, ut ornare dolor. Fusce vitae velit quis quam aliquam lobortis in eu erat. Pellentesque ex justo, sollicitudin vitae nibh eget, euismod posuere diam. Proin purus odio, hendrerit vel velit ac, pharetra maximus tortor. Maecenas eget nulla enim. Curabitur ut neque felis. Nulla a velit suscipit, blandit erat ac, pulvinar mauris. Nulla consectetur lacus eget lorem fermentum tincidunt.
        </p>
      </Col>
    </Row>
  </Container>
}
