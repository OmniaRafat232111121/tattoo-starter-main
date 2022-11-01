import React from 'react';
import { aboutData } from '../data';
//import about data 
import {motion} from 'frammer-motion'
const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className='lg:py-16'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-ro gap-x-[70px] items-center'>
    <motion.div 
    variants={fadeIn('right')}
    initial>
    </motion.div>
    </div>
    </div>
    </section>
  );
};

export default About;
