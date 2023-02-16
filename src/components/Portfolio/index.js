import React from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Project from '../Project'
import DBDLogo from './portfolioImages/dbdlogo.png'
import DevTubeLogo from './portfolioImages/devtube.png'
import VocesLogo from './portfolioImages/voces_logo.png'
import LyriksLiteLogo from './portfolioImages/logoSL.png'
import chatGTP from './portfolioImages/chatGTP.png'

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
            title="VOCES Y VISIONES"
            description="A full stack web app for a growing local business reaching out beyond its hometown"
            btn="https://vocesyvisiones.org"
            image={VocesLogo}
          />
          <Project
            title="ChatGTP AI chat bot"
            image={chatGTP}
            description="Introducing the smartest and sharpest AI out there. Its ChatGTP (not to be confused with ChatGPT)"
            btn="https://chat-gtp-rho.vercel.app/"
          />
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
        </div>
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio
