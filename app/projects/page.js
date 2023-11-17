"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { useRef } from 'react';
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
            description: 'Description for BookYatra',
        },
        {
            id: 2,
            title: 'FlightBooking',
            description: 'Description for FlightBooking',
        },
        {
            id: 3,
            title: 'Profolio',
            description: 'Description for FlightBooking',
        },
        {
            id: 4,
            title: 's',
            description: 'Description for FlightBooking',
        },
        {
            id: 5,
            title: 's',
            description: 'Description for FlightBooking',
        },
        {
            id: 6,
            title: 's',
            description: 'Description for FlightBooking',
        },
        {
            id: 7,
            title: 's',
            description: 'Description for FlightBooking',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <main className="bg-white">
            <div>
                <header className='text-xl text-right text-black font-semibold p-2'>
                    <div>
                        <Link href="../" className='text-bold mr-14'>Home</Link>
                        <Link href="../qualifications" className='text-bold mr-14'>Qualifications</Link>
                        <button onClick={() => scrollToSection(contactRef)} className='text-bold mr-10 border border-2 border-purple-600 rounded-full bg-gray-900 text-white p-1 pl-2 pr-2'>Say Hi!</button>
                    </div>
                </header>
                <p className='border-b-2 border-black '></p>
                <div className="flex justify-between">
                    <div className="bg-gray-900 p-5 w-[350px] h-[550px] overflow-auto">
                        <p className="text-4xl text-center font-semibold mt-5">
                            <span className="text-purple-600">{'< '}</span>
                            <span className="text-white">Projects</span>
                            <span className="text-purple-600">{' />'}</span>
                        </p>
                        <div className="grid grid-cols-1 gap-8 mt-10 mb-6">
                            {projects.map(project => (
                                <button onClick={() => setSelectedProject(project)} key={project.id} className="bg-gradient-to-l from-gray-900 to-gray-500 rounded-lg p-5 px-14 raise shadow-purple-600 shadow-md hover hover:shadow-purple-600 hover:shadow-lg">
                                    <h2 className="text-xl text-white text-center font-semibold ">{project.title}</h2>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 p-10 text-black rounded-lg">
                        <h2 className="text-3xl font-semibold mb-4">{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                    </div>
                </div>
                <Footer ref={contactRef} />
            </div>
        </main>
    );
}
