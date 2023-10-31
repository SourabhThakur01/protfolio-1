
import React from 'react'

export default function Home() {
  return (
    <main className='bg-white text-black l-10'>
      <div className='ml-[100px] mr-[100px]'>
        <div className='text-right text-xl font-semibold '>
          <button className='text-bold mr-14 mt-3'>Home</button>
          <button className='text-bold mr-14 mt-3'>Skills</button>
          <button className='text-bold mr-14 mt-3'>Projects</button>
          <button className='text-bold mr-8 mt-3 border rounded-full bg-gray-700 text-white p-1 pl-2 pr-2'>Say Hi!</button>
          <p className='border-b-2 border-gray-400 p-1'></p>
        </div>
        <div className='flex justify-center text-center'>
          <img src='./imgs/avtar.avif' className=' l-[400px] w-[300px] '/>
          </div>
          <div className='text-center'>
            <p className='text-3xl font-semibold'>Sourabh Thakur</p><br />
            <p className=' text-xl font-semibold'>{'<Software Develepor & All Time Learner/>'}</p>
          </div>
          <div className="border border-gray-900 bg-gray-900 p-4 mt-5 text-white">
             <p className='text-center'>Hi! I am Sourabh Thakur</p>
             <p></p>
          </div>
      </div>
    </main>
  )
}
