
import React from 'react'

export default function Home() {
  return (
    <main className='bg-white text-black l-10'>
      <div className='ml-[100px] mr-[100px]'>
        <div className='text-right text-xl font-semibold '>
          <button className='text-bold mr-14 mt-3'>Home</button>
          <button className='text-bold mr-14 mt-3'>Skills</button>
          <button className='text-bold mr-14 mt-3'>Projects</button>
          <button className='text-bold mr-8 mt-3 border border-2 border-purple-600 rounded-full bg-gray-700 text-white p-1 pl-2 pr-2'>Say Hi!</button>
          <p className='border-b-2 border-gray-400 p-1'></p>
        </div>
        <div className='flex justify-center text-center'>
          <img src='./imgs/avtar.avif' className=' l-[400px] w-[300px] '/>
          </div>
          <div className='text-center'>
            <p className='text-3xl font-semibold'>Sourabh Thakur</p><br />
            <p className=' text-xl font-semibold'>{'<Software Develepor & All Time Learner/>'}</p>
          </div>
          <div className='flex flex-column justify-center mt-5 '>
            <a href='https://www.facebook.com/profile.php?id=100083941508310'>
              <img src='./imgs/fb.png' className='w-[80px] h-[80px] mr-4 hover hover:w-[70px] hover:h-[70px] hover:mr-6 hover:mt-2'/>
            </a>
            <a href='https://www.instagram.com/sourabh.thakur_01/'>
              <img src='./imgs/Insta.png' className='w-[78px] h-[80px] mr-4 hover hover:w-[70px] hover:h-[70px] hover:mr-6 hover:mt-2'/>
            </a>
            <a href=''>
              <img src='./imgs/twitter.png' className='w-[80px] h-[80px] mr-4 hover hover:w-[70px] hover:h-[70px] hover:mr-6 hover:mt-2'/>
            </a>
            <a href='https://www.linkedin.com/in/sourabh-thakur2530/'>
              <img src='./imgs/linkdn.png' className='w-[80px] h-[80px] mr-4 hover hover:w-[70px] hover:h-[70px] hover:mr-6 hover:mt-2'/>
            </a>
          </div>
          <div className="border border-4 border-y-purple-600 rounded-md border-gray-900 bg-gray-900 p-4 mt-5 text-white">
             <p className='text-center text-xl mt-5'>Hi! I am Sourabh Thakur</p>
             <div className='flex flex-column mb-8'>
              <p className='text-left max-w-sm ml-[120px] mt-10'>jsdfbshj iab dadba dadahd ad ad adb adbadbkabdakbdia da diaidihadai dauhd iaudh aiud aud aiudhaidaiudg ad aiud aidgauid baiud aud aiud aidgaugd iadg aidgaiud aid aiudg aiudg aiugd aiugd iaudg aiudg aiudg aiudg iadgaidgaidgiadg aidg aidg iaudg iaud iaudg iadg aidg iadg iagdiadgiadgiadg a diagd iad iad aid iad ia d.</p>
              <p className='text-left max-w-sm ml-[60px] mt-10'>jsdfbshj iab dadba dadahd ad ad adb adbadbkabdakbdia da diaidihadai dauhd iaudh aiud aud aiudhaidaiudg ad aiud aidgauid baiud aud aiud aidgaugd iadg aidgaiud aid aiudg aiudg aiugd aiugd iaudg aiudg aiudg aiudg iadgaidgaidgiadg aidg aidg iaudg iaud iaudg iadg aidg iadg iagdiadgiadgiadg a diagd iad iad aid iad ia d.</p>
             </div>         
          </div>
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
