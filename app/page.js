
import React from 'react'
import Header from './header'
import Profile from './profile'
import About from './about'
import Skills from './skills'
import Projects from './projects'

export default function Home() {
  return (
    <main className='bg-white text-black l-10'>
      <div className='ml-[100px] mr-[100px]'>
        <Header/>
        <Profile/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
    </main>
  )
}
