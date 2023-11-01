
import React from 'react'
import Header from './header'
import Profile from './profile'
import About from './about'

export default function Home() {
  return (
    <main className='bg-white text-black l-10'>
      <div className='ml-[100px] mr-[100px]'>
        <Header />
        <Profile />
        <About />
          <div>
            <h2 className='text-center text-3xl  ml-[35px] tracking-wide mt-10 font-semibold border border-2 bg-gray-400 border-purple-600 rounded-full p-2 max-w-fit ml-[480px]'>{'<Skills/>'}</h2>

            <div className='flex flex-column mt-20  ml-[250px]'>

              <div className='relative'>
                <img src='./imgs/html.png' className='w-[100px] h-[100px] mr-[150px]'/>
                <p className=' absolute text-gray-600 text-2xl font-medium tracking-wide top-[110px] ml-[15px]'>HTML</p>
              </div>

              <div className='relative'>
                <img src='./imgs/css.png' className='w-[100px] h-[100px] mr-[150px]'/>
                <p className=' absolute text-gray-600 text-2xl font-medium tracking-wide top-[110px] ml-[20px]'>CSS</p>
              </div>

              <div className='relative'>
                <img src='./imgs/js.png' className='w-[100px] h-[100px] ml-[10px] '/>
                <p className=' absolute text-gray-600 text-2xl font-medium tracking-wide top-[110px] mr-[20px]'>JavaScript</p>
              </div>

            </div>

            <div className='flex flex-column mt-[100px] ml-[250px] mb-20'>

              <div className='relative'>
                <img src='./imgs/react.png' className='w-[100px] h-[100px] mr-[130px]'/>
                <p className=' absolute text-gray-600 text-2xl font-medium tracking-wide top-[110px] ml-[15px]'>React</p>
              </div>

              <div className='relative'>
                <img src='./imgs/node.png' className='w-[170px] h-[80px] mr-[110px] mt-[20px]'/>
                <p className=' absolute text-gray-600 text-2xl font-medium tracking-wide top-[110px] ml-[40px]'>Node</p>
              </div>

              <div className='relative'>
                <img src='./imgs/tailwind.png' className='w-[100px] h-[100px]'/>
                <p className=' absolute text-gray-600 text-2xl font-medium tracking-wide top-[110px]'>Tailwind</p>
              </div>

            </div>
          </div>
          <div className="border border-4 border-y-purple-600 rounded-md border-gray-900 bg-gray-900 p-4 mt-5 text-white">

        </div>
          
      </div>
    </main>
  )
}
