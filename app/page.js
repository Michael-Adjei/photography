import Image from 'next/image'
import Hero from './component/Hero'
import Slider from './component/Slider'
import { data } from './component/SliderData'
import Instagram from './component/Instagram'

export default function Home() {
  return (
    <div>
    <Hero heading='Stunning Photos' message='I capture moments 
    in nature and keep the alive.'/>
    <Slider slides={data}/>
    <Instagram/>
     </div>
  )
}
