'use client'
import Image from 'next/image'
import React from 'react'
import { workData } from './SliderData'

const Portfoli = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Party Photos</h1>
        <div className='flex flex-col sm:flex-row  p-4 gap-4 '>
            <div className='w-full h-full sm:w-[600px] sm:h-[600px] p-3'>
                <Image src='/john.jpg' alt='image' width={400} height={400} 
                layout='responsive' className='w-[400px] h-[400px]
                 rounded-xl hover:scale-95 ease-in-out duration-500'/>
            </div>
            <div className='w-full  h-full grid grid-cols-2 gap-4 sm:gap-6 p-2'>
                {
                    workData.map((item, index)=> {
                        return (
                           <Image key={index} src={item.image} width='600' height='600'
                           layout='responsive'  alt='image' className=' w-[600px] 
                           h-[700px] rounded-xl hover:scale-95 ease-in-out duration-500'/> 
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Portfoli
