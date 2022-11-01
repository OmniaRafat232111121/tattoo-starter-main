import React from 'react'
import hero from '../img/gallery/1.png'
const Analytics = () => {
  return (
    <div className='w-full items-center bg-black p-20'>
  <div className='mx-auto grid lg:grid-cols-2 md:grid-cols-3'>
  <img src={hero} className="w-[500px]"/>
  <div className='flex flex-col justify-center md:p-'>
  <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
    molestiae delectus culpa hic assumenda, voluptate reprehenderit
    dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
    eveniet ex deserunt fuga?
  </p>
 
  </div>
  </div>
    </div>
  )
}

export default Analytics
