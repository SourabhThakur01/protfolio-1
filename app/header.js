import React from "react";

 const header = () => {
    return (
        
        <header className='text-right text-xl font-semibold '>
          <button className='text-bold mr-14 mt-3'>Home</button>
          <button className='text-bold mr-14 mt-3'>Skills</button>
          <button className='text-bold mr-14 mt-3'>Projects</button>
          <button className='text-bold mr-14 mt-3'>Qualifications</button>
          <button className='text-bold mr-8 mt-3 border border-2 border-purple-600 rounded-full bg-gray-900 text-white p-1 pl-2 pr-2'>Say Hi!</button>
          <p className='border-b-2 border-black p-1'></p>
        </header>
    );
};

export default header;