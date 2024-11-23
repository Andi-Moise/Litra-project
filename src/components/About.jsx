import React from 'react'
import Animal from '../assets/Animal.png'

export default function About() {
  return (
    <div className="about relative">
      <div className="container">
        <div>
            <small>SINCE 2013</small>
            <h1>Moldova's first artizanal craft beer</h1>
        </div>
        
        <p>Ideea principală a fost de a ajuta oamenii din Moldova să descopere o lume diferită a berii, să demonstrăm că adevărata bere artizanală nu este doar de calitate mai înaltă, dar și o lume plină de creativitate, entuziasm și bucurie - un nou mod de a te bucura de viață.</p>
        <p className="button">EXPLORE OUR BEERS</p>
      </div>
      <img src={Animal}alt="" className='absolute bottom-0 right-0 h-[700px]'/>
    </div>
  )
}
