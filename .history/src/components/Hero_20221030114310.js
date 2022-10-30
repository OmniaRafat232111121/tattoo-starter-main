import React from 'react'
import {heroData} from '../data';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
const container={
  hidden: {},
    visible: { 
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
   
  
}
const Hero = () => {
  //destructring
  const {title,subtitle,btnText,btnIcon}=heroData;
  return (
   <section className='bg-hero bg-cover min-h-[40vh] lg:h-[984px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
   <motion.div variants={container}
   initial='hidden'
   whileInView={'visible'}
   className='container mx-auto min-h-[40vh]min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'
   >
   
   <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
   <motion.h1 
   variants={fadeIn('down')}
   className='h1'>
     {title}
   </motion.h1>
   <motion.p
   variants={fadeIn('down')}
   className='mb-8 lg:mb-16 max-w-lg leading-relaxed'
 >
   {subtitle}
 </motion.p>
   </div>
   </motion.div>
   </section>
  )
}

export default Hero
