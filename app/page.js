import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-white text-black l-10'>
      <div className='ml-[300px] mr-[300px]'>
        <div className='text-right'>
          <button className='text-bold mr-10 mt-3'>Home</button>
          <button className='text-bold mr-10 mt-3'>Skills</button>
          <button className='text-bold mr-10 mt-3'>Projects</button>
          <button className='text-bold mr-5 mt-3 border rounded-full bg-gray-700 text-white p-1 pl-2 pr-2'>Say Hi!</button>
        </div>
      </div>
    </main>
  )
}
