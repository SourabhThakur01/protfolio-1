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
            title: 'Book Yatra',
            developmentStack: 'React.js, Next.js, TailwindCSS',
            overview: '"BookYatra" is a web interface designed to provide a seamless booking experience for travelers seeking convenience and ease. This project, which I spearheaded, is a culmination of my proficiency in React.js for dynamic user interactions and Tailwind CSS for responsive and modern design elements.',
            github: 'https://github.com/SourabhThakur01/protfolio-1.git',
            img1: './imgs/projects/Bookyatra/flight.png',
            img2: './imgs/projects/Bookyatra/flight2.png',
            img3: './imgs/projects/Bookyatra/user.png',
            h1: 'Flights Lookup Feature:',
            h2: 'User Settings Module:',
            description:'The flight lookup page is the core of the "BookYatra" experience. Here, users can effortlessly browse through a variety of flight options to destinations worldwide. The interface presents essential flight details, such as timings and pricing, in a visually compelling format. With an intelligent search feature, customers can filter flights by airline names, making the search process both intuitive and efficient.',
            description2:'The user settings module empowers users to manage their personal profile with ease. It allows for the customization of language, timezone, and privacy settings, all within a user-friendly and accessible layout. The design follows a clear, logical flow that ensures a smooth user experience, emphasizing the importance of user autonomy in personal account management.',
            outcome: 'The "BookYatra" project is a demonstration of my ability to translate client requirements into a functional and aesthetically pleasing digital solution. It underscores my commitment to delivering high-quality web applications that prioritize user engagement and operational efficiency.',
        },
        {
            id: 2,
            title: 'Flight Booking',
            github: 'https://github.com/SourabhThakur01/FlightBooking.git',
            developmentStack: 'C#,',
            overview: '"Flight booking" was my school project i made it indivisually. It contain two pages flights and reservations. You can select your flight and book it with your name and when you reserve it, it will show you your reservation code. You even can search or do changes in your flight reservation with your reservation code, airline code and even by name.',
            img1: './imgs/projects/flightbooking/s1.png',
            img2: './imgs/projects/flightbooking/s2.png',
            img3: './imgs/projects/flightbooking/s3.png',
            h1: 'Flight Page:',
            h2: 'Reservation Page:',
            description:'First page is the Flight page in which you can search the flights by their airports and even reserve a new flight for you when you reserve a flight which also provide you proper new generated reservation code for your flight.',
            description2:'Second page is the Reservation page in which you can see the reservation you did and even you can change the reservation details and also change the status of your reservation. Also you have the access to search your reservation by your name, airline code and reservation code.',
            outcome: 'Overall the application teach me alot about C# and clear my concepts about it.',
        },
        {
            id: 3,
            title: 'Porfolio',
            github: 'https://github.com/SourabhThakur01/protfolio-1.git',
            developmentStack: 'react.js, next.js, tailwindcss',
            overview: 'If you are reading this that means you are in this project. "Porfolio" is my personal website which i made to showcase my skills and projects. Aslo this is was my first personal project. I made this website to look good and easy to access and navigate for the user. User can even contact me through this website by sending mail. This website represent my skills, projects on which i work, and my qualifications.',
            img1: './imgs/projects/port/s1.png',
            img2: './imgs/projects/port/s2.png',
            img3: './imgs/projects/port/s3.png',
            h1: 'First Page: ',
            h2: 'Other pages: ',
            description:'I made this website so simple with basic UI. It contain just basic information about me, my social links, skills and navigations to go on other pages and scroll the screen. User can even text me mail through this website. ',
            description2:'Other 2 pages are just inhanced informtion about my qualification and projects. User can see my quaification detials and even can see my projects and can go to the github link of the project. I also added some screenshots of the projects to show the user how the project looks like.',
            outcome: 'This project teach me a lot i learn how to make a website and how to make it look good and easy to access for the user. Also i get a lot in tailwindcss and next.js. I deploy this website on vercel. So anyone can get the access of this website. Overall this project is the base of my web development journey and it help me a lot in learing so many things about front-end development. ',
        },
        {
            id: 4,
            title: 'Music Mantra',
            github: 'https://github.com/SourabhThakur01/FlightBooking.git',
            developmentStack: 'native react.js, android studio',
            overview: 'Overall not complete yet 🤣 Check others 😁💕I was group project in which me and my team made a music player app. In this app we use native react.js and android studio. Its an app where we add feature of authentication and you can play music in it make your on playlist. We also used API for this application. Fisrt design this app on figma to complete its UI. I also provided the link of figma in the top.',
            Figma: 'https://www.figma.com/file/MZUYaPYl5DTDtIJRVacawZ/Untitled?type=design&mode=design&t=N8e97w3vABF2Bf0i-1',
            img1: './imgs/projects/flightbooking/s1.png',
            img2: './imgs/projects/flightbooking/s2.png',
            img3: './imgs/projects/flightbooking/s3.png',
            h1: 'Music player: ',
            h2: 'Playlist:',
            description:'First page is the Flight page in which you can search the flights by their airports and even reserve a new flight for you when you reserve a flight which also provide you proper new generated reservation code for your flight.',
            description2:'Second page is the Reservation page in which you can see the reservation you did and even you can change the reservation details and also change the status of your reservation. Also you have the access to search your reservation by your name, airline code and reservation code.',
            outcome: 'Overall not complete yet 🤣',
        },
        {
            id: 5,
            title: 'Gamer Hub',
            Figma: 'https://github.com/SourabhThakur01/FlightBooking.git',
            developmentStack: 'figma',
            overview: 'Still need to add images and link 😒😒😒It was a group project we design the proper UI for this app. This is type of gamers social media where they can login/signup and take to their friends and posts about games put status and get even new updates about games, We made a proper wireframe of this app on figma. I also provided the link of figma in the top.',
            img1: './imgs/projects/flightbooking/s1.png',
            img2: './imgs/projects/flightbooking/s2.png',
            img3: './imgs/projects/flightbooking/s3.png',
            h1: 'Flight Page:',
            h2: 'Reservation Page:',
            description:'First page is the Flight page in which you can search the flights by their airports and even reserve a new flight for you when you reserve a flight which also provide you proper new generated reservation code for your flight.',
            description2:'Second page is the Reservation page in which you can see the reservation you did and even you can change the reservation details and also change the status of your reservation. Also you have the access to search your reservation by your name, airline code and reservation code.',
            outcome: 'Overall the application teach me alot about C# and clear my concepts about it.',
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
                                <button onClick={() => setSelectedProject(project)} key={project.id} className="bg-gradient-to-l from-gray-800 to-gray-700 rounded-lg p-2 mt-1 px-14 shadow-md shadow-black raise hover:shadow-lg hover:shadow-purple-600">
                                    <h2 className="text-xl text-white text-center font-semibold ">{project.title}</h2>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 p-10 text-black rounded-lg text-xl h-[800px] overflow-auto">
                        <h2 className="text-3xl font-semibold text-center mb-8">{selectedProject.title}</h2>
                        <h3 className="text-2xl font-semibold mb-1">Project Description</h3>
                        <p className="mb-1"><span className="font-semibold">Made By: </span> <span>{selectedProject.developmentStack}</span></p>
                        {selectedProject.github != null &&
                        <p className="mb-1"><span className="font-semibold">GitHub: </span> <Link href={selectedProject.github} className="text-blue-700 hover:underline">github-link</Link></p>}
                        {selectedProject.Figma != null &&
                        <p className="mb-5"><span className="font-semibold">Figma: </span> <Link href={selectedProject.Figma} className="text-blue-700 hover:underline">Figma-link</Link></p>}
                        <p><span className=" text-2xl font-semibold">Overview</span></p>
                        <p className="mt-3 mb-5"><span>{selectedProject.overview}</span></p>
                        <img src={selectedProject.img1} alt="Screenshot" className="my-8 shadow-md shadow-black rounded-lg"/>
                        <p><span className="font-semibold">{selectedProject.h1}</span><span>{selectedProject.description}</span></p>
                        <img src={selectedProject.img2} alt="Screenshot" className="my-8 shadow-md shadow-black rounded-lg"/>
                        <p><span className="font-semibold">{selectedProject.h2}</span><span>{selectedProject.description2}</span></p>
                        <img src={selectedProject.img3} alt="Screenshot" className="my-8 shadow-md shadow-black rounded-lg"/>
                        <p><span className="font-semibold">Outcome: </span>{selectedProject.outcome}</p>

                    </div>
                </div>
                <Footer ref={contactRef} />
            </div>
        </main>
    );
}
