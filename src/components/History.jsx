import React from 'react'
import SliderI from '../assets/Slider.png';

export default function History() {
  return (
    <div className='history relative overflow-hidden'>
    <img src={SliderI} alt="" className='img1 absolute h-full w-full -right-[600px] z-10'/>
      <div className="leaf w-full h-full   absolute -left-[500px] bg-black opacity-90 z-0 flex">
                <img src="https://scontent.fkiv9-2.fna.fbcdn.net/v/t1.6435-9/59301347_1207791486054088_7576529044099825664_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=0lQ_fZ15WSUQ7kNvgGHNJLT&_nc_zt=23&_nc_ht=scontent.fkiv9-2.fna&_nc_gid=AsQm5JKkYxv7iZdmb2S7HnV&oh=00_AYB70XY3i20wAKS_F34J1cIjOBoXCoffp_P-YnF5HXt4_Q&oe=67868A1D" alt="" className='object-cover w-full' />
      </div>
      <div className='aux z-50'>
        <div className='part v1'>

        </div>
        <div className="part v2 z-50">
            <h1 className='text-white'>OUR HISTORY</h1>
            <p>La temelia fabricii noastre se află legea bavareză a purității berii - Reinheistgebot (din 1516) - care prevede, o bere poate fi preparată folosind doar 4 ingrediente: apă, malț, hamei și drojdie de bere. Singura abatere pe care o putem permite de la această lege este utilizarea de ingrediente 100% naturale precum fructe, legume sau condimente. </p>
            <p className='hide'>95% din berile noastre sunt fabricate conform legii purității berii bavareze. Noi nu folosim conservanți, arome sau orice fel de aditivi, berea este nefiltrată și nepateurizată astfel, fiind - 100% naturală.</p>
        </div>
      </div>
      
    </div>
  )
}
