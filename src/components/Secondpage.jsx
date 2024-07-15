import React from 'react';
import Crousel from './Crousel';

const Secondpage = () => {

  const newTab=url=>{
    window.open(url)
  }

  return (
    <div className="mt-10">
      <div className="border bg-neutral-500 "></div>
      <div className="flex flex-row w-full mt-10 pl-28 pr-28">
        <div className="w-5/12 ">
          <div className="mb-10">
            <h1 className="text-red-400 text-2xl font-semibold">WHAT WE DO</h1>
          </div>
          <div className="mb-10">
            <h1 className="font-bold text-6xl leading-none">SERVICE PROVIDE FOR YOU</h1>
          </div>
        </div>
        <div className="w-8/12 h-full pr-28 ">
          <p className='text-black pt-20 pl-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maxime itaque magnam obcaecati at tenetur cumque. Quos sequi vitae voluptatibus obcaecati consectetur, dolorem ut aperiam veniam aspernatur minus voluptatem quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sequi porro quos nulla officiis dicta nostrum tenetur aspernatur, excepturi optio at libero velit aliquid quia ratione? Quod quos vel deleniti.</p>
        </div>
      </div>

      <div>
      <Crousel/>
      <button onClick={()=>newTab('https://www.fylehq.com/')} className="ml-48 bg-red-400 mt-10 py-3 px-5 rounded-md text-sm text-white">Read More</button>
      </div>
      
    </div>
  );
};

export default Secondpage;

