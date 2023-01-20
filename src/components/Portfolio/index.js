import React from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Project from '../Project'
import DBDLogo from './portfolioImages/dbdlogo.png'
import DevTubeLogo from './portfolioImages/devtube.png'
import WeatherAppLogo from './portfolioImages/weather-app.png'
import LyriksLiteLogo from './portfolioImages/logoSL.png'

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
            title="DEVTUBE"
            description="A Youtube clone for all the developers out there"
            btn="https://devtubeclone.netlify.app/"
            image={DevTubeLogo}
          />
          <Project
            title="SPOTIFY LITE"
            description="A music listening app resembling spotify"
            btn="https://lyriks-lite.netlify.app/"
            image={LyriksLiteLogo}
          />
          <Project
            title="WEATHER OUT"
            description="A simple weather app all portfolios need"
            btn="https://timely-queijadas-638b49.netlify.app/"
            image={WeatherAppLogo}
          />
        </div>
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio
