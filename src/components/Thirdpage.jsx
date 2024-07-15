import React from 'react'
import Thirdimg from '../assests/thirdpageimg.png'
const Thirdpage = () => {
  return (
    <>
    
    <div className='flex flex-col justify-center items-center h-full'>
    <div className="border bg-neutral-500 "></div>
      <h1 className='pt-20 text-xl font-semibold text-red-500'>OUR PROJECTS</h1>
      <h1 className='pt-5 text-4xl font-bold'>WHY WE ARE BEST</h1>

      <div className='flex flex-col lg:flex-row justify-center items-stretch p-10 mt-10 space-y-5 lg:space-y-0 lg:space-x-10 ml-auto'>
        <div className='flex-shrink-0'>
          <img src={Thirdimg} alt="" className='rounded h-full' />
        </div>
        <div className='flex flex-col justify-between items-center  w-1/4'>
          <div className=' bg-slate-100 hover:bg-red-500 flex-grow w-full h-full'>
            <h1  className='font-semibold text-xl p-5'>Genderless kei - japan's hot</h1>
            <p className='pl-5 pr-5 pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, cum exercitationem dolorem eaque magni perferendis enim.</p>
          </div>
          <div className=' bg-slate-100 hover:bg-red-500 flex-grow '>
          <h1  className='font-semibold text-xl p-5'>Genderless kei - japan's hot</h1>
          <p className='pl-5 pr-5 pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, cum exercitationem dolorem eaque magni perferendis enim.</p>
          </div>
          <div className=' bg-slate-100 hover:bg-red-500  flex-grow '>
          <h1  className='font-semibold text-xl p-5'>Genderless kei - japan's hot</h1>
          <p className='pl-5 pr-5 pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, cum exercitationem dolorem eaque magni perferendis enim.</p>
          </div>
        </div>
      </div>  
    </div>
    </>
  )
}

export default Thirdpage
