import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
    
    const p1 = () => {
        return(
            <main>
                <button className="border border-4 rounded-full max-w-fit border-yellow-600 bg-gray-800 p-4 mt-[60px] text-white 
                shadow-lg shadow-yellow-600 transform transition-transform duration-300 hover:shadow-md hover:shadow-yellow-600 raise">
                    <p className='text-bold text-3xl m-3'>Flight Booking</p>
                </button>
            </main>
        );
    };

    const p2 = () => {
        return(
            <main>
                <button className=" ml-[100px] border border-4 rounded-full max-w-fit border-green-600 bg-gray-800 p-4 mt-[60px] text-white 
                shadow-lg shadow-green-600 transform transition-transform duration-300 hover:shadow-md hover:shadow-green-600 raise">
                    <p className='text-bold text-3xl m-3'>Music App</p>
                </button>
            </main>
        );
    };

    const p3 = () => {
        return(
            <main>
                <button className=" ml-[100px] border border-4 rounded-full max-w-fit border-red-400 bg-gray-800 p-4 mt-[60px] text-white 
                shadow-lg shadow-red-400 transform transition-transform duration-300 hover:shadow-md hover:shadow-red-400 raise">
                    <p className='text-bold text-3xl m-3'>Gamer's App</p>
                </button>
            </main>
        );
    };

    const p4 = () => {
        return(
            <main>
                <button className="border border-4 rounded-full max-w-fit border-blue-400 bg-gray-800 p-4 mt-[60px] text-white 
                shadow-lg shadow-blue-400 transform transition-transform duration-300 hover:shadow-md hover:shadow-blue-400 raise">
                    <p className='text-bold text-3xl m-3'>Lrn. Mgn Sys</p>
                </button>
            </main>
        );
    };

    const p5 = () => {
        return(
            <main>
                <button className=" ml-[110px] border border-4 rounded-full max-w-fit border-pink-400 bg-gray-800 p-4 mt-[60px] text-white 
                shadow-lg shadow-pink-400 transform transition-transform duration-300 hover:shadow-md hover:shadow-pink-400 raise">
                    <p className='text-bold text-3xl m-3 ml-10 mr-10'>Sorting</p>
                </button>
            </main>
        );
    };

    const p6 = () => {
        return(
            <main>
                <button className=" ml-[100px] border border-4 rounded-full max-w-fit border-lime-400 bg-gray-800 p-4 mt-[60px] text-white
                shadow-lg shadow-lime-400 transform transition-transform duration-300 hover:shadow-md hover:shadow-lme-400 raise">
                    <p className='text-bold text-3xl m-3 ml-10 mr-10'> Portfolio </p>
                </button>
            </main>
        );
    };

    const p7 = () => {
        return(
            <main>
                <button className="border border-4 rounded-full max-w-fit border-orange-600 bg-gray-800 p-4 mt-[60px] text-white
                shadow-lg shadow-orange-600 transform transition-transform duration-300 hover:shadow-md hover:shadow-orange-600 raise">
                    <p className='text-bold text-3xl m-3 ml-8 mr-8'>Book Yatra</p>
                </button>
            </main>
        );
    };

    const p8 = () => {
        return(
            <main>
                <button className=" ml-[100px] border border-4 rounded-full max-w-fit border-indigo-600 bg-gray-800 p-4 mt-[60px] text-white
                shadow-lg shadow-indigo-600 transform transition-transform duration-300 hover:shadow-md hover:shadow-indigo-600 raise">
                    <p className='text-bold text-3xl m-3 ml-5 mr-5'>Music App</p>
                </button>
            </main>
        );
    };

    const p9 = () => {
        return(
            <main>
                <div className=" ml-[100px] border border-4 rounded-full max-w-fit border-stone-400 bg-gray-800 p-4 mt-[60px] text-white
                shadow-lg shadow-stone-400 transform transition-transform duration-300 hover:shadow-md hover:shadow-stone-400 raise">
                    <button className='text-bold text-3xl m-3 ml-10 mr-10'>Others+</button>
                </div>
            </main>
        );
    };

    return (
        <main ref={ref}>
            <div className="border border-4 border-y-purple-600 rounded-md border-gray-900 bg-gray-900 p-5 mt-20 text-white shadow-xl shadow-black">
                <div className="flex justify-center ">
                    <h2 className='text-3xl text-center tracking-wide mt-20 ml-[170px] font-semibold'>{'<Projects/>'}</h2>
                    <img src='./imgs/proj.png' className='w-[200px] h-[160px] ml-[10px] mt-[3px]'/>
                </div>
                <div className="flex justify-center">
                    {p1()}
                    {p2()}
                    {p3()}
                </div>
                <div className="flex justify-center">
                    {p4()}
                    {p5()}
                    {p6()}
                </div>
                <div className="flex justify-center mb-[70px]">
                    {p7()}
                    {p8()}
                    {p9()}
                </div>
            </div>
        </main>
    )
});

export default Projects;