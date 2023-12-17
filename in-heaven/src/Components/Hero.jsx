import React from 'react'
import img3 from '../assets/img/Hero/img3.webp'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://www.pr-medicalevents.com/wp-content/uploads/2020/09/shutterstock_706442563resize.jpg' alt='/' className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-black p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>Your next adventure begins with a simple click. Reserve your room now and embark on a journey of comfort, luxury, and unforgettable moments. We look forward to being a part of your travel narrative.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero