import React from 'react'
import {heroData} from '../data';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

const Hero = () => {
  //destructring
  const {title,subtitle,btnText,btnIcon}=heroData;
  return (
   <section className='bg-hero bg-cover min-h-[40vh] lg:h-[984px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
   <motion.div>
   </motion.div>
   </section>
  )
}

export default Hero
