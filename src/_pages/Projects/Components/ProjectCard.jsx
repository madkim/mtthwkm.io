import React from 'react'
import classNames from 'classnames'
import { Image } from 'react-bootstrap'

export default function ProjectCard({ image, status = '', select }) {
    const projectCard = classNames('project__card', {
        'project__card--first': status === 'first',
        'project__card--last': status === 'last',
        'project__card--active': status === 'active',
        'project__card--show': status === 'show',
    })

  return (
    <div onClick={select} className={projectCard}>
        <Image fluid src={image} style={{borderRadius: '1.5em 1.5em 0 0'}} />
        <div className='project__card--details p-3'>
            <h5>Project</h5>
            <p className='lead'>This is the short detail about the project</p>
        </div>
    </div>
  )
}
