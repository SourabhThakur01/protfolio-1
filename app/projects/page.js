"use client"
import Link from "next/link";
import React, { useState } from 'react';
import {useRef} from 'react';
import Footer from "../footer/page";

export default function Home() {

    const contactRef = useRef(null);

    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      })
    }

    const projects = [
        {
            id: 1,
            title: 'BookYatra',

        },
        {
            id: 2,
            title: 'FlightBooking',
        },
        {
            id: 3,
            title: 'FlightBooking',
        },
        {
            id: 4,
            title: 'FlightBooking',
        },
        {
            id: 5,
            title: 'FlightBooking',
        },
        {
            id: 6,
            title: 'FlightBooking',
        },
        {
            id: 7,
            title: 'FlightBooking',
        },
        {
            id: 8,
            title: 'FlightBooking',
        },
    ];

    const ProjectDetailsModal = ({ project, onClose }) => {
        if (!project) return null;
    
        return (
            <main className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-xl flex items-center justify-center z-50">
                <div key={project.id} className="bg-gray-900 rounded-lg p-6 raise shadow-purple-600 shadow-md hover hover:shadow-purple-600 hover:shadow-lg">
                    <div className="mb-3">
                        <span className="text-2xl">{project.title}</span>
                    </div>
                    <div className="mb-3">
                        <span className="text-xl ">{project.title}</span>
                    </div>
                    <button onClick={onClose} className="text-white border border-purple-600 px-4 py-2 mr-3 rounded hover:bg-purple-600">
                        Back to Projects
                    </button>
                </div>
            </main>
        );
    };

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };


    return(
        <main className="bg-stone-300">
            <div>
                <header className='text-right text-xl text-black font-semibold '>
                    <Link href="../page.js" className='text-bold mr-20 mt-3'>Home</Link>
                    <button className='text-bold mr-20 mt-3'>Qualifications</button>
                    <button onClick={() => scrollToSection(contactRef)} className='text-bold mr-20 mt-3 border border-2 border-purple-600 rounded-full bg-gray-900 text-white p-1 pl-2 pr-2'>Say Hi!</button>
                    <p className='border-b-2 border-black p-1'></p>
                </header>
                <div className="flex justify-between bg-gray-900 p-10 mt-5">
                    <p className="text-4xl font-semibold text-white mt-10 ml-[350px]">{'< Projects />'}</p>
                    <img src="../imgs/proj.png" className="w-[180px] h-[140px] mr-[350px]"/>
                </div>
                <div className="grid grid-cols-3 gap-10 mt-10 m-20 ">
                <ProjectDetailsModal project={selectedProject} onClose={closeModal} />
                {projects.map(project => (
                    <button onClick={() => openModal(project)} key={project.id} className="bg-gray-900 rounded-lg p-6 raise shadow-purple-600 shadow-md hover hover:shadow-purple-600 hover:shadow-lg">
                        <h2 className="text-2xl text-white text-center font-semibold mb-2">{project.title}</h2>
                    </button>
                ))}
                </div>
                <Footer ref={contactRef}/>
            </div>
        </main>
    );
}