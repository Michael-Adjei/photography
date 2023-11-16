import Image from 'next/image'
import React from 'react'
import InstagramImg from './InstagramImg'
import { instagramData } from './SliderData'


const Instagram = () => {
  return (
    
    <div className=' max-w-[1240px] mx-auto text-center py-24'>
         <p className='text-2xl font-extrabold'>Follow Us On Instagram</p>
         <p className='pb-4 text-lg font-semibold'>@Stunning</p>
         <div  >
           <InstagramImg socialImg={instagramData} />
         </div>
    </div>
  )
}

export default Instagram
