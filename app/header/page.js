"use client";
import React, { useRef } from "react";
import Profile from '../profile/page'
import About from '../about/page'
import Skills from '../skills/page'
import Projects from '../projects'
import Qualifications from '../qualifications'
import Footer from '../footer/page'

const Header = () => {
    const skillsRef = useRef(null);
    const qualificationsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        })
    }

    return (
        <div>
            <header className='text-right text-xl font-semibold '>
                <button className='text-bold mr-14 mt-3'>Home</button>
                <button onClick={() => scrollToSection(skillsRef)} className='text-bold mr-14 mt-3'>Skills</button>
                <button onClick={() => scrollToSection(qualificationsRef)} className='text-bold mr-14 mt-3'>Qualifications</button>
                <button onClick={() => scrollToSection(projectsRef)} className='text-bold mr-14 mt-3'>Projects</button>
                <button onClick={() => scrollToSection(contactRef)} className='text-bold mr-14 mt-3 border border-2 border-purple-600 rounded-full bg-gray-900 text-white p-1 pl-2 pr-2'>Say Hi!</button>
                <p className='border-b-2 border-black p-1'></p>
            </header>
            <div className="mx-[100px]">
                <Profile/>
                <About/>
                <Skills ref={skillsRef}/>
                <div className="flex justify-between mx-20">
                    <Qualifications ref={qualificationsRef}/>
                    <Projects ref={projectsRef}/>
                </div>
            </div>
            <Footer ref={contactRef}/>
        </div>
    );
};

export default Header;
