import React from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
// import portfolioData from "../../data/portfolio.json"
import Project from '../Project'
import DBDLogo from './portfolioImages/dbdlogo.jpg'
import DummyData from './portfolioImages/dummydata.png'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div className="images-container">
          <Project
            title="DEAD BY DAYLIGHT SOCIAL MEDIA APP"
            image={DBDLogo}
            description="A fan made social media app for the game Dead By Daylight"
            btn="https://dbdsma.vercel.app/"
          />
          <Project
            title="PLACEHOLDER"
            description="PLACEHOLDER"
            btn="https://placeholder.com"
            image={DummyData}
          />
          <Project
            title="PLACEHOLDER"
            description="PLACEHOLDER"
            btn="https://placeholder.com"
            image={DummyData}
          />
          <Project
            title="PLACEHOLDER"
            description="PLACEHOLDER"
            btn="https://placeholder.com"
            image={DummyData}
          />
        </div>
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio
