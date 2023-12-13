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
            school: 'Southern Alberta of Technology (SAIT), Calgary, Alberta, Canada',
            Session: 'Sep 2022 - Present',
            Overview: 'I am currently pursuing my Diploma in Software Development from Southern Alberta of Technology (SAIT), Calgary, Alberta, Canada. I am learning a lot of new things here and getting a lot of knowledge about the software development. Here i am getting knowledge about the different programming languages and their uses. More practical knowedge i am seeking from this with frameworks, programming languages, software development methodoligies database and many more. I got lot of skills from here not just the computer skills even the group working, collabrative and leadership.',
            subj1: 'Object Oriented Programming I (Python)',
            subj2: 'Mathematics for Technologists',
            subj3: 'Web Development 1 (HTML, CSS, JavaScript)',
            subj4: 'Introduction to Network Systeem',
            subj5: 'Technical Communications I',
            S1: 'Sem I',
            S2: 'Sem II',
            S3: 'Sem III',
            S4: 'Sem IV',
            m1: 'A',
            m2: 'A',
            m3: 'A+',
            m4: 'A+',
            m5: 'A+',
            S2subj1: 'Object Oriented Programming II (C#)',
            S2subj2: 'Database Design & ProgrammingPress',
            S2subj3: 'Software Analysis and Design',
            S2subj4: 'User Experience and Design',
            S2subj5: 'Critical Thinking',
            S2m1: 'A+',
            S2m2: 'A+',
            S2m3: 'A-',
            S2m4: 'A+',
            S2m5: 'A-',
            S3subj1: 'Web Development II',
            S3subj2: 'Mobile Application Development',
            S3subj3: 'Database Programming',
            S3subj4: 'Object Oriented Programming III (Java)',
            S3subj5: 'Software Projects: Analysis, Design & Management ',
            S3m1: 'Persuing',
            S3m2: 'Persuing',
            S3m3: 'Persuing',
            S3m4: 'Persuing',
            S3m5: 'Persuing',
            TotalMarks: 'GPA 3.94/4.00',
            img: '/imgs/qualifications/sait.jpg',
            School:`The Southern Alberta Institute of Technology (SAIT) is a polytechnic institute in Calgary, Alberta, Canada. SAIT offers more than 110 career programs in technology, trades and business. Established in 1916, it is Calgary's second oldest post-secondary institution and Canada's first publicly funded technical institute`,
            Final: 'My journey in SAIT is still going on and i am learn a lot from this place. It plays a big role in my life when i came to Canada it was for my first time when i came to a new country o a new culture without knew someone, here i got so familier environment and people. I made lot of friends here and learn lot of another things. This school gives me a lot in personal and professional life. I am very thankful to my school and my teachers who helped me a lot to get my skills and knowledge about computer.',
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
            <header className='text-xl md:text-right  text-black font-semibold p-2 md:bg-white bg-gray-900 md:border-b-0 border-b-4 border-purple-600'>
                    <div className="md:flex md:justify-end grid grid-cols-2 ml-3">
                        <div className="md:hidden flex items-left px-2 pt-1">
                            <details className="dropdown">
                                <summary className="text-bold text-white text-3xl border-gray-900 btn bg-gray-900">☰</summary>
                                <ul className="p-2 text-md shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[380px] text-white">
                                    <li>
                                        {diplomas.map(diploma => (
                                        <button onClick={() => setSelectedDiploma(diploma)} key={diploma.id}>
                                            <h2 className="text-xl text-white text-center font-semibold ">{diploma.title}</h2>
                                        </button>
                                        ))}

                                    </li>
                                </ul>
                            </details>
                        </div>
                        <div className="md:block flex justify-between mx-3 md:mx-0 md:mt-1">
                            <Link href="../" className='text-bold text-md md:text-xl md:text-black text-white md:mt-1 mt-3 md:mr-14'>Home</Link>
                        <   Link href="../projects" className='text-bold text-md md:text-xl md:text-black text-white md:mt-1 mt-3 md:mr-14'>Projects</Link>
                        </div>
                        <button onClick={() => scrollToSection(contactRef)} className='hidden md:block text-bold mr-10 border border-2 border-purple-600 rounded-full bg-gray-900 text-white md:px-2 md:p-1'>Say Hi!</button>
                    </div>
                </header>
                <p className='border-b-2 border-black '></p>
                <div className="flex justify-between">
                    <div className="hidden md:block bg-gray-900 py-3 px-2">
                        <p className="text-4xl text-center font-semibold mt-5">
                            <span className="text-purple-600">{'< '}</span>
                            <span className="text-white">Qualifications</span>
                            <span className="text-purple-600">{' />'}</span>
                        </p>
                        <div className="grid grid-cols-1 gap-4 mt-10 mb-6">
                            {diplomas.map(diploma => (
                                <button onClick={() => setSelectedDiploma(diploma)} key={diploma.id} className="bg-gradient-to-l from-gray-800 to-gray-700 rounded-lg p-2 mt-1 px-14 shadow-md shadow-black raise hover:shadow-lg hover:shadow-purple-600">
                                    <h2 className="text-xl text-white text-center font-semibold mb-2">{diploma.title}</h2>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 md:p-10 py-6 px-5 text-black rounded-lg font-serif md:h-[700px] overflow-auto">
                        <h2 className="text-3xl font-semibold mb-3">{selectedDiploma.title}</h2>
                        <p><span className=" text-xl font-semibold mb-1">School: </span>{selectedDiploma.school}</p>
                        <p><span className=" text-xl font-semibold ">Year: </span>{selectedDiploma.Session}</p>
                        <p><span className="text-xl font-semibold">Marks: </span><span>{selectedDiploma.TotalMarks}</span></p>
                        <p className="mt-3">{selectedDiploma.Overview}</p>
                        <p className="text-2xl font-semibold mb-4 mt-3"> Marks Obtained:</p>
                        <div>
                            <p className="text-2xl mt-3 mb-1">{selectedDiploma.S1}</p>
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
                        {selectedDiploma.S2 != null &&(
                        <div>
                            <p className="text-2xl mt-5 mb-1">{selectedDiploma.S2}</p>
                            <table className="table-auto w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2subj1}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2m1}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2subj2}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2m2}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2subj3}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2m3}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2subj4}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2m4}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2subj5}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S2m5}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        )}
                        {selectedDiploma.S3 != null &&(
                        <div>
                            <p className="text-2xl mt-5 mb-1">{selectedDiploma.S3}</p>
                            <table className="table-auto w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3subj1}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3m1}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3subj2}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3m2}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3subj3}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3m3}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3subj4}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3m4}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3subj5}</td>
                                        <td className="border border-gray-300 px-4 py-2">{selectedDiploma.S3m5}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        )}
                        <div className="flex justify-center">
                            <img src={selectedDiploma.img} alt="My School"  className="m-10 shadow-md shadow-black rounded-lg"/>
                        </div>
                        <p>{selectedDiploma.School}</p>
                        <p className="my-3">{selectedDiploma.Final}</p>
                    </div>
                </div>
                <Footer ref={contactRef} />
            </div>
        </main>
    );
}
