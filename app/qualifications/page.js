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

    const diplomas = [
        {
            id: 1,
            title: 'High School Diploma',
            description: 'Description for High School Diploma',
        },
        {
            id: 2,
            title: 'Diploma in Computer Application',
            description: 'Description for Diploma in Computer Application',
        },
        {
            id: 3,
            title: 'Diploma in Software Development',
            description: 'Description for Diploma in Software Development',
        },
    ];

    const [selectedDiploma, setSelectedDiploma] = useState(diplomas[0]);

    return (
        <main className="bg-white">
            <div>
                <header className='text-xl text-right text-black font-semibold p-2'>
                    <div>
                        <Link href="../" className='text-bold mr-14'>Home</Link>
                        <Link href="../projects" className='text-bold mr-14'>Projects</Link>
                        <button onClick={() => scrollToSection(contactRef)} className='text-bold mr-10 border border-2 border-purple-600 rounded-full bg-gray-900 text-white p-1 pl-2 pr-2'>Say Hi!</button>
                    </div>
                </header>
                <p className='border-b-2 border-black '></p>
                <div className="flex justify-between">
                    <div className="bg-gray-900 p-3">
                        <p className="text-4xl text-center font-semibold mt-10">
                            <span className="text-purple-600">{'< '}</span>
                            <span className="text-white">Qualifications</span>
                            <span className="text-purple-600">{' />'}</span>
                        </p>
                        <div className="grid grid-cols-1 gap-10 mt-14 mb-6">
                            {diplomas.map(diploma => (
                                <button onClick={() => setSelectedDiploma(diploma)} key={diploma.id} className="bg-gradient-to-l from-gray-900 to-gray-600 rounded-lg p-6 raise shadow-purple-600 shadow-md hover hover:shadow-purple-600 hover:shadow-lg">
                                    <h2 className="text-xl text-white text-center font-semibold mb-2">{diploma.title}</h2>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 p-10 text-black rounded-lg">
                        <h2 className="text-3xl font-semibold mb-4">{selectedDiploma.title}</h2>
                        <p>{selectedDiploma.description}</p>
                    </div>
                </div>
                <Footer ref={contactRef} />
            </div>
        </main>
    );
}
