import React from 'react'
import './index.scss'

const Project = (props) => {
    const title = props.title;
    const image = props.image;
    const description = props.description;
    const btn = props.btn

  return (
    
      <div className="image-box">
        <img src={image} alt="portfolio" className="portfolio-image" />
        <div className="content">
          <p className="title">{title}</p>
          <h4 className="description">{description}</h4>
          <button className="button" onClick={() => window.open(btn)}>View</button>
        </div>
    
    </div>
  )
}

export default Project
