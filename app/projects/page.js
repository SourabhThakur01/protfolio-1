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
            developmentStack: 'C#, XML',
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
            title: 'TiffIndia',
            developmentStack: 'Figma, react.js, API',
            overview: 'TiffIndia is a online website which is development stage right now. This website is for ordering indian tiffin for all the week. User should need to sign up for this app and make their account to access all the other services. I make also add google authentication which make easy for users to sign up. Right now i am working on its design when the design is completed then i will start further on the code. ',
            Figma: 'https://www.figma.com/file/iD1kp2ie1uulqI6kIZwKNu/Tiff-India?type=design&node-id=0%3A1&mode=design&t=NF0cqm8G22dmHU65-1',
            img1: './imgs/projects/tiff/s1.png',
            img2: './imgs/projects/tiff/s2.png',
            img3: './imgs/projects/tiff/s3.png',
            h1: 'Some of the designed pages ',
            h2: '',
            description:'',
            description2:'',
            outcome: 'Overall not complete yet 🤣',
        },
        {
            id: 5,
            title: 'Gamer Hub',
            developmentStack: 'Figma',
            Figma: 'https://www.figma.com/file/2mbRF3ZKdFAZSdCP7VBuPs/Gamers-Hut?type=design&node-id=1%3A732&mode=design&t=NF0cqm8G22dmHU65-1',
            overview: 'It was a group project we design the proper UI for this app. This is type of gamers social media where they can login/signup and take to their friends and posts about games put status and get even new updates about games, We made a proper wireframe of this app on figma. I also provided the link of figma in the top.',
            img1: './imgs/projects/gamers/game1.png',
            img2: './imgs/projects/gamers/game2.png',
            img3: './imgs/projects/gamers/game3.png',
            h1: '',
            h2: '',
            description:'In this design we made a proper UI for the app, It include all th pages of the app and connected them with each other. We consider all the things like color, font, icons, and even the layout of the app. We tried to make it simple and easy to access for the user. Before design it, we did all the research and coclude on its color contrast, font size and alignment.',
            description2:'This contain pages like login/signup, home, profile, chat, status, servers, news and many more in it. It was designed so users could posts their pictures, videos and even thougts in this app and even like, comment and share them. Users could even go live put status and follow their favourite influencers on it. We designrd a news page in it to get all the updates of new coming games and their updated version and many more. ',
            outcome: 'The motive of design this app was to learn about the UI/UX. This was the first designing project i worked with all the nformation provided. This design is not not outstanding and very impressive but this was a simple design with teach me alot about designing and specially about Figma.',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <main className="bg-white">
            <div>
                <header className='md:text-xl md:text-right text-base text-black font-semibold p-2'>
                    <div className=" md:block grid grid-cols-4  ">
                    <div className="md:hidden flex items-left px-2 pt-1">
                        <details className="dropdown">
                            <summary className="text-bold text-black text-3xl border-white btn bg-white">☰</summary>
                            <ul className="p-2 text-md shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-white">
                                <li>
                                    {projects.map(project => (
                                    <button onClick={() => setSelectedProject(project)} key={project.id}>
                                        <h2 className="text-xl text-white text-center font-semibold ">{project.title}</h2>
                                    </button>
                                    ))}
                                
                                </li>
                            </ul>
                        </details>
                    </div>
                        <Link href="../" className='text-bold mt-3 md:mr-14'>Home</Link>
                        <Link href="../qualifications" className='text-bold mt-3 md:mr-14'>Qualifications</Link>
                        <button onClick={() => scrollToSection(contactRef)} className='text-bold md:mr-10 border border-2 border-purple-600 rounded-full bg-gray-900 text-white md:px-2'>Say Hi!</button>
                    </div>
                </header>
                <p className='border-b-2 border-black '></p>
                <div className="flex justify-between">
                    <div className="hidden md:block bg-gray-900 p-5 w-[300px] overflow-auto">
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
                    <div className="flex-1 px-10 py-5 text-black rounded-lg text-xl h-[800px] overflow-auto">
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
