import React from 'react';
import {motion} from 'framer-motion';
//fadin 
import {fadeIn} from '../variants' 
import { testimonialData } from '../data';

const Testimonial = () => {
  return (
<motion.section
variants={fadeIn('up')}
initial='hidden'
whileInView={'show'}
viewport={{once:false,amount:0.3}}
className='bg-black  pt-[40px] pb-[40px] lg:pb-[160px] lg:pt-0 mt-[20px]'>
<div className='container mx-auto'>
<Swiper>
{testimonialData.map((slide))}
</Swiper>
</div>
</motion.section>
  );
};

export default Testimonial;
