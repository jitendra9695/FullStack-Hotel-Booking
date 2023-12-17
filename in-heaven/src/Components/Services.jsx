import React from 'react'
import { FaWifi } from 'react-icons/fa'
import {MdPool, MdSportsGymnastics, MdRoomService } from 'react-icons/md'

const Services = () => {
  return (
    <section className='bg-gray-200 py-16 rounded-lg shadow-md'>
        <div id='services' className='container mx-auto'>
            <h2 className='text-3xl font-semibold text-center mb-10'>Hotel Services</h2>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center '>
                <div className='bg-cyan-100 rounded-lg shadow-md relative'>
                    <FaWifi className='text-cyan-700 text-2xl mx-auto'/>
                    <h3 className='text-xl font-semibold mb-4'>Free Wi-fi</h3>
                    <p className='text-gray-600'>Stay connenected with our high-speed Wi-Fi service.</p>
                </div>
                <div className='bg-cyan-100 rounded-lg shadow-md'>
                    <MdRoomService className='text-cyan-700 text-2xl mx-auto'/>
                    <h3 className='text-xl font-semibold mb-4'>Room Service</h3>
                    <p className='text-gray-600'>Enjoy delicious meals and snacks delivered to your room.</p>
                </div>
                <div className='bg-cyan-100 rounded-lg shadow-md'>
                    <MdPool className='text-cyan-700 text-2xl mx-auto'/>
                    <h3 className='text-xl font-semibold mb-4'>Swimming Pool</h3>
                    <p className='text-gray-600'>Take a dip in our luxurious swimming pool.</p>
                </div>
                <div className='bg-cyan-100 rounded-lg shadow-md'>
                    <MdSportsGymnastics className='text-cyan-700 text-2xl mx-auto'/>
                    <h3 className='text-xl font-semibold mb-4'>Gym</h3>
                    <p className='text-gray-600'>Stay active in our fully equipped gym.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services