import React, { useEffect, useState } from 'react'
import SayCard from './Components/SayCard'
import MoolaCard from './Components/MoolaCard'
import SpaceCard from './Components/SpaceCard'
import SmartIrrigationCard from './Components/SmartIrrigationCard'
import RockPaperScissorsCard from './Components/RockPaperScissorsCard'

import { Button } from 'react-bootstrap'
import { animateProjectsPage } from '../../_helpers/animation'

export default function Projects() {
  const [hasClicked, setHasClicked] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    animateProjectsPage()
  }, [])

  const handleNext = () => {
    const nextStep = (currentStep + 1) % 5
    setCurrentStep(nextStep)
  }  

  const handlePrev = () => {
    const prevStep = currentStep === 0 ? 4 : (currentStep - 1) % 5
    setCurrentStep(prevStep)
  }

  const handleShowDetails = () => {
      setHasClicked(true)
      setShowDetails(true)
  }

  return (
    <div id='projects' className='d-flex flex-column justify-content-center align-items-center' >
      { hasClicked === false &&
        <div className='project__click__me text-light user-select-none'>
          click me &nbsp;<i className='fa-solid fa-hand-point-down'></i>
        </div>
      }
      <div id='project__cards'>
        <MoolaCard
          step={Math.abs(currentStep)}
          showDetails={showDetails}
          handleShowDetails={handleShowDetails}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <SayCard
          step={Math.abs(currentStep)}
          showDetails={showDetails}
          handleShowDetails={handleShowDetails}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <SmartIrrigationCard 
          step={Math.abs(currentStep)}
          showDetails={showDetails}
          handleShowDetails={handleShowDetails}
        />
        <RockPaperScissorsCard
          step={Math.abs(currentStep)}
          showDetails={showDetails}
          handleShowDetails={handleShowDetails}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <SpaceCard
          step={Math.abs(currentStep)}
          showDetails={showDetails}
          handleShowDetails={handleShowDetails}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
      </div>

      <br />

      <div id='project__arrows'>
        { showDetails ? 
          <div className='d-flex flex-column justify-content-center'>
            <Button variant='light' className='px-5' onClick={() => setShowDetails(false)}>Close</Button>
          </div>
          :
          <div className='w-100 d-flex flex-row justify-content-center'>  
            <div className='project__arrow' onClick={handlePrev}>
              <i className='fa-thin fa-2xl fa-circle-arrow-left'></i>
            </div>
            <div className='project__arrow' onClick={handleNext}>
              <i className='fa-thin fa-2xl fa-circle-arrow-right'></i>
            </div>
          </div>
        }
      </div>
      <br />
    </div>
  )
}
