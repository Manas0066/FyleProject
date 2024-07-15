import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assests/sliderimg1.png'
import img2 from '../assests/sliderimg2.png'
import img3 from '../assests/sliderimg3.png'
import img4 from '../assests/sliderimg2.png'

const data=[
    {image:img1},
    {image:img2},
    {image:img3},
    {image:img4}
]

function Crousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-10'>
      <Slider {...settings}>
        {data.map((d)=>(
            <div key={d} className='bg-red-100 rounded-xl flex justify-center items-center h-96 w-72 overflow-hidden'>
            <img src={d.image} alt="" className='rounded object-cover h-full w-full' />
            {d === 1 && ( // Add the button only to the second item (index 1)
              <button className='absolute bottom-4 bg-blue-500 text-white py-2 px-4 rounded z-10'>
                Click Me
              </button>
            )}
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default Crousel


