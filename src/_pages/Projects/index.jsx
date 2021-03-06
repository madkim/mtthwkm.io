import React, { useEffect, useState } from 'react'
import ProjectCard from './Components/ProjectCard'
import { animateProjectsPage } from '../../_helpers/animation'

export default function Projects() {
  const [selected, setSelected] = useState('active')

  useEffect(() => {
    animateProjectsPage()
  }, [])

  const handleSelect = () => {
    setSelected(selected === 'active' ? 'show' : 'active')
  }

  return (
    <div id='projects' className='d-flex flex-column justify-content-center align-items-center' >
      <div className='project__click__me text-light user-select-none'>
        click me &nbsp;<i className='fa-solid fa-hand-point-down'></i>
      </div>
      <br />
      <div id='project__cards'>
        <ProjectCard
          select={handleSelect}
          status='first'
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <ProjectCard
          select={handleSelect}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <ProjectCard
          select={handleSelect}
          status={selected}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <ProjectCard
          select={handleSelect}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <ProjectCard
          select={handleSelect}
          status='last'
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
      </div>

      <br />

      <div id='project__arrows'>
        <div className='project__arrow'>
          <i className='fa-thin fa-2xl fa-circle-arrow-left'></i>
        </div>
        <div className='project__arrow'>
          <i className='fa-thin fa-2xl fa-circle-arrow-right'></i>
        </div>
      </div>
      <br />
    </div>
  )
}
