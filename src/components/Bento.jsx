import React from 'react'
import Layer_2 from '../assets/Layer_2.png'
import Layer_3 from '../assets/Layer_3.png'

export default function Bento() {
  return (
    <div className='bento h-screen w-full relative overflow-hidden  my-4'>
       <img src={Layer_2} alt="" className='img1 absolute top-0 -right-[100px] h-[800px] z-0'/>
       <img src={Layer_3} alt="" className='img2 absolute bottom-0 -left-[100px] h-[700px] z-10'/>
        <div className="container h-full  ">
            <div className='text pt-3'>
                <p className="title">Our</p>
                <p className="title">Hospitality</p>
            </div>
            
            <div className="grid-bento w-full pb-3 z-30">
                <div className="part1"><img src="https://scontent.fkiv9-1.fna.fbcdn.net/v/t51.75761-15/469604254_18451047067066502_2432479563850456271_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vS1RmNC2elgQ7kNvgHbz4PQ&_nc_zt=23&_nc_ht=scontent.fkiv9-1.fna&_nc_gid=AfMC5g8N56f0ehxeryHX3pl&oh=00_AYC2Ez4hAuIor8jlDn8ufkmcdKeonggbvRskHsr3I8prrw&oe=6759D2B7" alt="" /></div>
                <div className="part2"><img src="https://scontent.fkiv9-2.fna.fbcdn.net/v/t51.75761-15/466429276_18446579986066502_9090525304581437342_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z8daCbjB6Z0Q7kNvgG7OSpw&_nc_zt=23&_nc_ht=scontent.fkiv9-2.fna&_nc_gid=AcbYTqhELlhYJDpt75A45gj&oh=00_AYDLqAjf-ltKIW-JgDLsgkFIR396zFTckYfvvaaog1uLRA&oe=6759B9E7" alt="" /></div>
                <div className="part3"><img src="https://scontent.fkiv9-1.fna.fbcdn.net/v/t39.30808-6/466831900_18447233530066502_5825572776657604968_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2DaetBK3xscQ7kNvgHtl_aX&_nc_zt=23&_nc_ht=scontent.fkiv9-1.fna&_nc_gid=Ak9rJR1iGR4Lcy5E90b2_AG&oh=00_AYBdB0F1ObQ_gHfiHPUl33aV6GczAf_w2-pEBrAipK1wWQ&oe=6759EDE6" alt="" /></div>
                <div className="part4"><img src="https://scontent.fkiv9-2.fna.fbcdn.net/v/t39.30808-6/466677410_18447463801066502_5763419801605613522_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RygjLFXqHIoQ7kNvgEXEfbo&_nc_zt=23&_nc_ht=scontent.fkiv9-2.fna&_nc_gid=ARA9p-JesN938hM0L31ZVWn&oh=00_AYBoYYz3RhEB7U1-TSbeIZxAwYhyTE-tUK2-ial5oL_sUg&oe=6759CBBE" alt="" /></div>
                <div className="part5"><img src="https://scontent.fkiv9-1.fna.fbcdn.net/v/t39.30808-6/467322438_18447244621066502_1085677023655626906_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zu8BNpvUM6oQ7kNvgE6zaKd&_nc_zt=23&_nc_ht=scontent.fkiv9-1.fna&_nc_gid=Ay59lpR4T9972coit0brJCc&oh=00_AYDtZGVj-HC202PJrWajBSMal1ey1EThbnW5W-hWXhFeqw&oe=6759BD00" alt="" /></div>
                <div className="part6"><img src="https://scontent.fkiv9-2.fna.fbcdn.net/v/t51.75761-15/468561840_18449293456066502_5591275140138455234_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cIbUXIUUDUoQ7kNvgHzuSch&_nc_zt=23&_nc_ht=scontent.fkiv9-2.fna&_nc_gid=AaVj1uvyXV1T0t8GOvRrVPT&oh=00_AYCoDwV38Z9B5BYyaDzytWyBrDTU_HuNS84l8WvL6g5XTQ&oe=6759BA81" alt="" /></div>
                <div className="part7">
                  <p>SEE MORE OF OUR VIBE</p>
                </div>
            </div>
        </div>
       
    </div>
  )
}
