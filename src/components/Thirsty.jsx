import React from 'react'
import Layer_4 from '../assets/Layer_4.png'
import Layer_5 from '../assets/Layer_5.png'

export default function Thirsty() {
  return (
    <div className='thirsty relative overflow-hidden'>
      <img src={Layer_4} alt="" className='absolute top-0 -right-[100px] h-[600px] '/>
      <img src={Layer_5} alt="" className='absolute -bottom-[50px] -left-[100px] h-[600px] -z-10'/>
      <div className='text'>
          <div className="heading">
            <h1>THIRSTY</h1>
            <h1>YET ?</h1>
          </div>
          <p className="button">COME TO GET A BEER</p>
      </div>
    </div>
  )
}
