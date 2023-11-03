
import React from 'react'
import Header from './header'
import Profile from './profile'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import Qualifications from './qualifications'

export default function Home() {
  return (
    <main className='bg-orange-100 text-black'>
      <div className='ml-[100px] mr-[100px]'>
        <Header/>
        <Profile/>
        <About/>
        <Skills/>
        <Projects/>
        <Qualifications/>
      </div>
    </main>
  )
}
