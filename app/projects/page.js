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
            developmentStack: 'React.js, Next.js, TailwindCSS',
            overview: '"BookYatra" is a web interface designed to provide a seamless booking experience for travelers seeking convenience and ease. This project, which I spearheaded, is a culmination of my proficiency in React.js for dynamic user interactions and Tailwind CSS for responsive and modern design elements.',
            github: 'https://github.com/SourabhThakur01/FlightBooking.git',
            img1: './imgs/Bookyatra/flight.png',
            img2: './imgs/Bookyatra/flight2.png',
            img3: './imgs/Bookyatra/user.png',
            h1: 'Flights Lookup Feature:',
            h2: 'User Settings Module:',
            description:'The flight lookup page is the core of the "BookYatra" experience. Here, users can effortlessly browse through a variety of flight options to destinations worldwide. The interface presents essential flight details, such as timings and pricing, in a visually compelling format. With an intelligent search feature, customers can filter flights by airline names, making the search process both intuitive and efficient.',
            description2:'The user settings module empowers users to manage their personal profile with ease. It allows for the customization of language, timezone, and privacy settings, all within a user-friendly and accessible layout. The design follows a clear, logical flow that ensures a smooth user experience, emphasizing the importance of user autonomy in personal account management.',
            outcome: 'The "BookYatra" project is a demonstration of my ability to translate client requirements into a functional and aesthetically pleasing digital solution. It underscores my commitment to delivering high-quality web applications that prioritize user engagement and operational efficiency.',
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
                    <div className="bg-gray-900 p-5 w-[300px] overflow-auto">
                        <p className="text-4xl text-center font-semibold mt-5">
                            <span className="text-purple-600">{'< '}</span>
                            <span className="text-white">Projects</span>
                            <span className="text-purple-600">{' />'}</span>
                        </p>
                        <div className="grid grid-cols-1 gap-3 mt-10 mb-6">
                            {projects.map(project => (
                                <button onClick={() => setSelectedProject(project)} key={project.id} className="bg-gradient-to-l from-gray-800 to-gray-700 rounded-lg p-2 mt-1 px-14 shadow-md shadow-black raise hover:shadow-lg hover:shadow-black">
                                    <h2 className="text-xl text-white text-center font-semibold ">{project.title}</h2>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 p-10 text-black rounded-lg text-xl h-[800px] overflow-auto">
                        <h2 className="text-3xl font-semibold text-center mb-8">{selectedProject.title}</h2>
                        <h3 className="text-2xl font-semibold mb-1">Project Description</h3>
                        <p className="mb-1"><span className="font-semibold">Made By: </span> <span>{selectedProject.developmentStack}</span></p>
                        <p className="mb-10"><span className="font-semibold">GitHub: </span> <Link href={selectedProject.github} className="text-blue-700 hover:underline">github-link</Link></p>
                        <p><span className="font-semibold mb-1">Overview</span></p>
                        <p className="mb-5"><span>{selectedProject.overview}</span></p>
                        <img src={selectedProject.img1} alt="BookYatra Screenshot" className="mb-5"/>
                        <p><span className="font-semibold">{selectedProject.h1}</span><span>{selectedProject.description}</span></p>
                        <img src={selectedProject.img2} alt="BookYatra Screenshot" className="my-5"/>
                        <p><span className="font-semibold">{selectedProject.h2}</span><span>{selectedProject.description2}</span></p>
                        <img src={selectedProject.img3} alt="BookYatra Screenshot" className="my-5"/>
                        <p><span className="font-semibold">Outcome: </span>{selectedProject.outcome}</p>

                    </div>
                </div>
                <Footer ref={contactRef} />
            </div>
        </main>
    );
}
