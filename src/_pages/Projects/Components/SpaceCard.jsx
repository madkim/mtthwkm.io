import React, { useEffect, useRef } from 'react'
import { Image } from 'react-bootstrap'

export default function SpaceCard({ image, step, status = '', select }) {
  const spaceRef = useRef(null)

  useEffect(() => {
    switch (step) {
      case 0: 
        spaceRef.current.style.transform = 'translateX(0vw)'
        spaceRef.current.style.opacity = 0
        break;
      case 1:
        spaceRef.current.style.transform = 'translateX(-32vw)'
        spaceRef.current.style.opacity = 1
        break;
    
      default:
        break;
    }
  }, [step])

  return (
    <div ref={spaceRef} onClick={select} className='project__card'>
      <Image
        src={image}
        style={{
          borderRadius: '1.5em 1.5em 0 0',
          height: 'auto',
          width: '100%'
        }}
      />
      <div className='project__card--details p-3'>
        <h5>SPACE</h5>
        <p className='lead'>This is the short detail about the project</p>

        {status === 'show' && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non scelerisque est. Fusce hendrerit eros ac sapien efficitur, et
            commodo metus auctor. Suspendisse vitae nisl efficitur, hendrerit
            neque nec, aliquam neque. Maecenas ultricies consectetur magna ut
            viverra. Ut quis ligula vestibulum, tempus tortor nec, egestas
            lacus. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nullam euismod lorem suscipit est
            interdum, quis placerat odio ornare. Vivamus sagittis, libero ut
            tincidunt hendrerit, dolor purus bibendum lacus, quis suscipit nulla
            mauris et nibh. Donec hendrerit semper pulvinar. Sed eleifend elit
            id ornare scelerisque. Curabitur lectus erat, eleifend sit amet
            aliquet id, volutpat a magna. Duis placerat efficitur ligula, nec
            placerat magna molestie in. Vestibulum eu tortor pretium, pretium mi
            quis, commodo magna. Cras a ex metus. Quisque commodo congue
            interdum. Vivamus non lacus orci. Morbi consectetur mi orci, vel
            pharetra sem ultricies eget. Aenean tempor lectus dui, in faucibus
            dolor sodales at. Curabitur eu leo vel neque consectetur eleifend.
            Pellentesque semper justo sed lorem iaculis lobortis. Donec
            vulputate sapien eget nisl luctus, vitae fermentum turpis sagittis.
            Nullam lacinia commodo dui, vel consectetur magna congue non.
            Phasellus eget mauris erat. Ut quis gravida nulla, nec posuere
            ligula. In nulla metus, consequat et leo vel, consequat dictum
            tortor. Fusce semper velit felis, at tristique mi pulvinar non. Cras
            pulvinar lectus id nisl ultricies, a lacinia dolor rhoncus. Cras
            porttitor bibendum mauris quis porta. Duis ultrices justo ut nibh
            ullamcorper, eu vulputate nibh tristique. Etiam id massa a leo
            interdum rutrum vulputate et augue. Mauris libero augue, finibus ac
            viverra sed, vulputate nec est. Aliquam sit amet commodo nisi, quis
            lacinia est. Integer rutrum sapien lacus, facilisis pellentesque
            ante elementum at. Ut nisl metus, convallis id ultricies sit amet,
            tristique fermentum nunc. In congue lectus eget pulvinar
            condimentum. Ut sit amet malesuada ligula. In lorem nisl, convallis
            sed orci in, vulputate gravida elit. Fusce mollis iaculis ultrices.
            Etiam quis tristique massa. Vestibulum ut massa urna. Integer semper
            ac eros sit amet luctus. Suspendisse molestie bibendum libero in
            molestie. Etiam et iaculis turpis. Donec tempor luctus ipsum id
            feugiat. Sed fermentum metus ultricies libero pharetra, non finibus
            diam sodales. Curabitur viverra, dolor vitae efficitur aliquam,
            mauris sem sollicitudin elit, in consectetur tortor ex eget justo.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Vivamus vestibulum dignissim dolor, vitae
            sollicitudin elit pretium nec. Cras vestibulum cursus turpis at
            viverra. Aenean id eleifend urna, ut ornare dolor. Fusce vitae velit
            quis quam aliquam lobortis in eu erat. Pellentesque ex justo,
            sollicitudin vitae nibh eget, euismod posuere diam. Proin purus
            odio, hendrerit vel velit ac, pharetra maximus tortor. Maecenas eget
            nulla enim. Curabitur ut neque felis. Nulla a velit suscipit,
            blandit erat ac, pulvinar mauris. Nulla consectetur lacus eget lorem
            fermentum tincidunt.
          </p>
        )}
      </div>
    </div>
  )
}
