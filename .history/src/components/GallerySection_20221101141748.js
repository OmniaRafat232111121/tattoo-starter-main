import React,{useState} from 'react';
import {galleryData} from '../data'
const GallerySection = () => {
  //destructring data 
  const {title,btnText,btnIcon,image}=galleryData;
  return (
    <section className='bg-[#F9F9F9]  section relative mt-[40px] lg:mt-0'>
    <div className='container mx-au'>
    </div>

    </section>

  );
};

export default GallerySection;
