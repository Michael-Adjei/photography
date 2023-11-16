'use client'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open,setOpen]= useState(false);
    const [color, setColor]= useState('transparent');
    const [textColor, setTextColor]= useState('white');
   
    const handleMenu =()=> {
        setOpen(!open);
    }

    useEffect(()=>{
        const changeColor=()=> {
            if(window.scrollY >=90 ){
                setColor('#ffffff')
                setTextColor('#000000');
            }else{
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll',changeColor)
    },[])

  return (
    <div style={{background: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in-out 
    duration-300 '>
       <div className=' max-w-[1240px] m-auto flex justify-between items-center p-4
        text-white'>
        <Link href='/'> <h1 style={{color: `${textColor}`}} 
        className='font-bold text-4xl '>Stunning</h1></Link>
         <ul style={{color: `${textColor}`}} className='hidden sm:flex gap-6'>
            <li className=' hover:scale-110 p-1 duration-300'><Link href='/'>Home</Link></li>
            <li className=' hover:scale-110 p-1 duration-300'><Link href='/#gallary'>Gallary</Link></li>
            <li className=' hover:scale-110 p-1 duration-300'><Link href='/work'>Work</Link></li>
            <li className=' hover:scale-110 p-1 duration-300'><Link href='/contact'>Contact</Link></li>
         </ul>
         
         {/* mobile menu*/}
         <div className=' sm:hidden block z-10' onClick={()=> handleMenu()}>
           {
             open ? (<IoMdClose size={32} style={{color: `${textColor}`}} /> ): 
             (<TiThMenu size={32} style={{color: `${textColor}`}} />)
           }
       </div>
        {/* mobile menu drawer*/}
         <div className= {open ? 'flex': 'hidden'}>
        
      <ul className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex  flex-col justify-center items-center w-full h-screen
        bg-black text-center duration-300'>
            <li onClick={handleMenu} className='p-4 text-4xl hover:text-gray-500 '><Link href='/'>Home</Link></li>
            <li onClick={handleMenu} className='p-4 text-4xl hover:text-gray-500'><Link href='/#gallary'>Gallary</Link></li>
            <li  onClick={handleMenu} className='p-4 text-4xl hover:text-gray-500'><Link href='/work'>Work</Link></li>
            <li  onClick={handleMenu} className='p-4 text-4xl hover:text-gray-500'><Link href='/contact'>Contact</Link></li>
            </ul>
         </div>
      </div>
</div>
  )
}

export default Navbar
