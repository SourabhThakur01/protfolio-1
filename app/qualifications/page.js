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
            title: 'Diploma in Software Development',
            description: 'Description for Diploma in Software Development',
        },
        {
            id: 2,
            title: 'Diploma in Computer Application',
            school: 'I.C.V.S. COMPUTER INSTITUTE, DAULATPUR, HIMACHAL PARDESH, INDIA',
            Session: 'July 2021 - June 2022',
            Overview: 'I completed this i year diploma from I.C.V.S. COMPUTER INSTITUTE, DAULATPUR, HIMACHAL PARDESH, INDIA. I take a lot of knowledge about the basics of computer and gather knowledge about technical stuff. Tecahers was well knowledged about their subjects and make their students satisfied with their lectures and knowledge. I completed this cousre in year 2022. I already knew some of the things but it still take the courses to learn more about the things and to get a certificate with good grace.',
            subj1: 'Employability Skills',
            subj2: 'Computer Fundamentals',
            subj3: 'MS-Office,DTP',
            subj4: 'Programming',
            subj5: 'Accounting',
            subj6: 'Internet, Operating System & Hardware',
            m1: '90',
            m2: '78',
            m3: '82',
            m4: '78',
            m5: '86',
            m6: '81',
            TotalMarks: '495/600',
            img: '/imgs/qualifications/icvs.jpeg',
            Final: 'My training center I.C.V.S. works under OM INSTITUTE OF VOCATIONAL EDUCATION & TRAINING which give me my certification in DCA (Diploma in Computer Application). The skills i get here became very helpful for me when i came to Canada as an international student. I am very thankful to my teacgers here who helped me a lot to get my skills and knowledge about computer.',
        },
        {
            id: 3,
            title: 'High School Diploma',
            school: 'GOVT SR SEC SCHOOL, MUBARIKPUR, HIMACHAL PARDESH, INDIA',
            Session: 'April 2021',
            Overview: 'I completed my High School Diploma from GOVT SR SEC SCHOOL, MUBARIKPUR, HIMACHAL PARDESH, INDIA. It was the time of when all world was under the terror of COVID-19. IT was my first time when i started taking classes online. My school was in small town with not that much of facilities. But still i managed learned by youtube and other online platforms. It was a huge change for a small town students specially in that time but i managed to get good marks in my exams with help of new tech things and my tutors.',
            m1: '77',
            subj1: 'English',
            subj2: 'Physics',
            subj3: 'Chemistry',
            subj4: 'Mathematics',
            subj5: 'PhysicalEducation',
            m2: '70',
            m3: '85',
            m4: '85',
            m5: '91',
            TotalMarks: '408/500',
            img: '/imgs/qualifications/high.jpg',
            School: 'My School was a very well discipined and well organised school and the teavhers and staff was very supportive and helpful. I learned a lot from my school and i am very thankful to my school for making me what i am today. My school had really telented tecahers as well as students it was the one of the best school from the area even in supports and other activities too. I am very proud to be a part of my school. Infrastructure of school was also very good and it was a very big school with a lot of facilities with a big play grounds and high quality labs.',
            Final: 'I was not able to went to school that much in last of year due to COVID-19, but i much i went i learned a lot from my school in all the fields. That school give many experiences and memories to me which i will never forget. I am very proud to be a part of my school. I will always miss my school and my teachers.',
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
                    <div className="bg-gray-900 py-3 px-2">
                        <p className="text-4xl text-center font-semibold mt-10">
                            <span className="text-purple-600">{'< '}</span>
                            <span className="text-white">Qualifications</span>
                            <span className="text-purple-600">{' />'}</span>
                        </p>
                        <div className="grid grid-cols-1 gap-4 mt-14 mb-6">
                            {diplomas.map(diploma => (
                                <button onClick={() => setSelectedDiploma(diploma)} key={diploma.id} className="bg-gradient-to-l from-gray-800 to-gray-700 rounded-lg p-4 px-14 shadow-md shadow-black raise hover:shadow-lg hover:shadow-black">
                                    <h2 className="text-xl text-white text-center font-semibold mb-2">{diploma.title}</h2>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 p-10 text-black rounded-lg font-serif h-[500px] overflow-auto">
                        <h2 className="text-3xl font-semibold mb-3">{selectedDiploma.title}</h2>
                        <p><span className=" text-xl font-semibold mb-1">School: </span>{selectedDiploma.school}</p>
                        <p><span className=" text-xl font-semibold ">Year: </span>{selectedDiploma.Session}</p>
                        <p><span className="text-xl font-semibold">Marks: </span><span>{selectedDiploma.TotalMarks}</span></p>
                        <p className="mt-3">{selectedDiploma.Overview}</p>
                        <div>
                            <p className="text-2xl font-semibold mb-4 mt-3">Marks Obtained:</p>
                            <table className="table-auto w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.subj1}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.m1}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.subj2}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.m2}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.subj3}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.m3}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.subj4}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.m4}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.subj5}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.m5}</td>
                                    </tr>
                                    {selectedDiploma.subj6 != null && selectedDiploma.m6 != null && (
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.subj6}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.m6}</td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <img src={selectedDiploma.img} alt="My School"  className="my-3"/>
                        <p>{selectedDiploma.School}</p>
                        <p className="my-3">{selectedDiploma.Final}</p>
                    </div>
                </div>
                <Footer ref={contactRef} />
            </div>
        </main>
    );
}
