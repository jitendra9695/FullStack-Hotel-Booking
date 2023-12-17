import React from 'react' 
import img1 from '../assets/'
import img2 from '../assets/img/Hero/img2.webp'
import img3 from '../assets/img/Hero/img3.webp'
import img4 from '../assets/img/Hero/img4.jpg'



const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src={img1} alt='/' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={img2} alt='/' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={img3} alt='/' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={img4} alt='/' />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={img1} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Gallery