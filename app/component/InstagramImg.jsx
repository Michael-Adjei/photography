'use client'
import Image from 'next/image'
import React from 'react'
import {FaInstagram} from 'react-icons/fa'

const InstagramImg = ({socialImg}) => {
  return (
    <div className='relative w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {
            socialImg.map((item, index) =>{
                return ( 
                      <div >
                    <Image src={item.image} width={800}
                     height={600} className=' w-full h-full rounded-xl  hover:scale-95 
                       hover:opacity-50 ease-in-out duration-300' layout='responsive'/>
                     
                    
                   </div>
                )
              
            })
           
        }
        
    </div>
  )
}

export default InstagramImg
