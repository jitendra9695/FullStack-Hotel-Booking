import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {

    const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
           <img src='https://th.bing.com/th/id/OIP.iwuuvR_gdpdRIRgBzmvgkwHaER?w=274&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'   
           className='h-10  px-1 py-1 rounded-full'/>
           <h1 className='text-xl font-bold'>In-Heaven</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='text-[var(--primary-dark)] mr-2' />
                <p className='text-sm text-gray-700'>9AM-5PM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='text-[var(--primary-dark)] mr-2' />
                <p className='text-sm text-gray-700'>1-777-718-2341</p>
            </div>
            <div>
                <button
                 onClick={() => navigate("/login")}
                 className='px-3 py-1 rounded-full bg-gradient-to-r from-blue-800 to-pink-800 text-white'>Login</button>
            </div>
        </div>
       
    </div>
  )
}

export default TopBar