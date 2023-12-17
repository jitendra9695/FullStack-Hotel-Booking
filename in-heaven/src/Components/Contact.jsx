import React from 'react'
import img4 from '../assets/img/Hero/img4.jpg'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700 text-xl font-bold'>Send Us a Message</h2>
      <p className='text-center text-gray-700 py-2'>We're Standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img src={img4} alt='/' className=' w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] shadwo-lg rounded' />
        <form >
          <div className=' grid grid-cols-2 '>
            <input className='border m-2 p-2' type='text' placeholder='first' />
            <input className='border m-2 p-2' type='text' placeholder='last' />
            <input className='border m-2 p-2' type='email' placeholder='Email' />
            <input className='border m-2 p-2' type='tel' placeholder='Phone' />
            <input className='border col-span-2 m-2 p-2' type='text' placeholder='Address' />
            <textarea className='border col-span-2 m-2 p-2' cols='30' rows='10' placeholder='Feedback' ></textarea>
            <button className='c-l-span-2 m-2  bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg hover:scale-105'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact