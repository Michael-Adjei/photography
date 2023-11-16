import React from 'react'

const ContactForm = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Let's Work Together</h1>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                 <input type='text' placeholder='Name' className=' border 
                  shadow-lg p-3 rounded-xl' />
                   <input  type='email' placeholder='Email' className=' border 
                  shadow-lg p-3 rounded-xl'/>
            </div>
            <input type='text' placeholder='Subject' className=' border 
                  shadow-lg p-3 w-full my-2 rounded-xl'/>
            <textarea cols='30' rows='10' placeholder='Message' className=' border 
                  shadow-lg p-3 w-full rounded-xl'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2 
            text-bold hover:bg-black hover:text-white
             ease-in-out duration-300 rounded-xl'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm
