import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
const Fourthpage = () => {
  return (
    <div className='flex flex-col justify-between items-center'>
      <h1 className='pt-20 text-xl font-semibold text-red-500'>EXPERT GROWTH</h1>
      <h1 className='pt-5 text-4xl font-bold'>OUR COMPANY GROWTH</h1>

      <div className='flex justify-center items-center m-auto mt-20'>

        <div className='flex flex-col justify-center items-center  bg-slate-50 hover:bg-white hover:shadow-lg p-5'>
            <div className='p-2'>
            <h1 className='text-3xl text-red-500'><FaHeart /></h1>
            </div>
            <div>
                <h1 className='text-5xl font-medium p-2'>199+</h1>
            </div>
            <div>
                <h1 className='text-xl font-normal p-2'>Satisfied customer</h1>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center  bg-slate-50 hover:bg-white hover:shadow-lg p-5 ml-1'>
            <div className='p-2'>
            <h1 className='text-3xl text-red-500'><FaClock /></h1>
            </div>
            <div>
                <h1 className='text-5xl font-medium p-2'>1591+</h1>
            </div>
            <div>
                <h1 className='text-xl font-normal p-2'>Day of operation</h1>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center  bg-slate-50 hover:bg-white hover:shadow-lg p-5 ml-1'>
            <div className='p-2'>
            <h1 className='text-3xl text-red-500'><FaCircleCheck /></h1>
            </div>
            <div>
                <h1 className='text-5xl font-medium p-2'>283+</h1>
            </div>
            <div>
                <h1 className='text-xl font-normal p-2'>Completed Projects</h1>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center  bg-slate-50 hover:bg-white hover:shadow-lg p-5 ml-1'>
            <div className='p-2'>
            <h1 className='text-3xl text-red-500'><FaTrophy /></h1>
            </div>
            <div>
                <h1 className='text-5xl font-medium p-2'>75+</h1>
            </div>
            <div>
                <h1 className='text-xl font-normal p-2'>Awards winner</h1>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Fourthpage
