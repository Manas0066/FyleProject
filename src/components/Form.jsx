import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

function Form({onClose}) {

  return (
    <div className="fixed inset-0 bg-opacity-55 z-30 backdrop-blur-sm mx-auto bg-white p-8 rounded shadow-md h-[400px] w-[500px] mt-20">
      <div>
        <button onClick={onClose} className="text-xl float-right cursor-pointer text-red-500">
          <IoMdCloseCircleOutline />
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Talk to us</h1>
      <form action="https://getform.io/f/ayvpkdlb" method="POST">
        <div className="mb-4">
          <label htmlFor="email" className="sr-only">Work email</label>
          <input type="email" id="email" name="email" placeholder="Work email*" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="sr-only">First name</label>
            <input type="text" id="firstName" name="firstName" placeholder="First name*" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName" className="sr-only">Last name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last name*" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="agree" name="agree" className="mr-2 focus:ring-2 focus:ring-red-500" />
          <label htmlFor="agree" className="text-sm">
            I agree to Fyle's terms and conditions, and provide consent to send me communication.
          </label>
        </div>
        <button type="submit" className="w-full mt-4 bg-red-500 text-white py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
