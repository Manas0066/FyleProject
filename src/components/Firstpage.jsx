import React from 'react';
import { useState } from 'react';
import frontimg from '../assests/frontpageimg.png'; 
import Form from './Form';

const Firstpage = () => {

  const [showModal,setShowModal]=useState(false)

  return (
    <div className="mt-10 w-auto">
      <div className="border bg-neutral-500 "></div>
      <div className="flex flex-row justify-between h-screen">
        <div className="w-1/2 pl-28 py-28">
          <h1 className="text-2xl font-semibold text-orange-500 font-quicksand">AWARD WINNING</h1>
          <h1 className="pt-5 text-6xl font-bold">DIGITAL MARKETING AGENCY</h1>
          <p className="pt-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor eaque corporis necessitatibus praesentium. Ducimus fugiat a inventore sint atque omnis, asperiores, ex enim id maiores soluta.</p>
          <button onClick={()=>setShowModal(true)} className="bg-red-400 mt-10 py-3 px-5 rounded-md text-sm text-white">
            CONTACT US
          </button>
          {showModal && <Form onClose={()=>setShowModal(false)}/>}
        </div>
        <div className="relative w-1/2 flex items-center">
          <div className="absolute right-0 w-3/4 h-3/4">
            <img className="w-full h-full object-cover rounded-xl" src={frontimg} alt="Front Page Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
