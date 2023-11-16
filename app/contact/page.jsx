import React from 'react'
import Hero from '../component/Hero'
import ContactForm from '../component/Contact'

const Contact = () => {
  return (
    <div>
        <Hero heading='Contact Us' message='Reach us by send us an email 
        and we would get back to up asap' />
        <ContactForm/>
    </div>
  )
}

export default Contact
