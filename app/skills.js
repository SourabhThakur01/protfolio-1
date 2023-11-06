import React, { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
    
    const one2five = () => {
        return (
            <main>
                <div>
                    <div className='flex justify-center mt-20'>

                        <div className='relative'>
                            <img src='./imgs/html.png' className='w-[60px] h-[60px] mr-[100px]'/>
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px]'>HTML</p>
                        </div>

                        <div className='relative'>
                            <img src='./imgs/css.png' className='w-[60px] h-[60px] mr-[100px]'/>
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-2'>CSS</p>
                        </div>

                        <div className='relative'>
                            <img src='./imgs/javascript.png' className='w-[60px] h-[60px] mr-[100px] ml-[35px]'/>
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px]'>JavaScript</p>
                        </div>

                        <div className='relative'>
                            <img src='./imgs/react.png' className='w-[60px] h-[60px] mr-[100px] ml-[30px]'/>
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-[27px]'>React</p>
                        </div>

                        <div className='relative'>
                            <img src='./imgs/node.png' className='w-[60px] h-[60px] ml-3'/>
                            <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px]'>Node.js</p>
                        </div>

                    </div>
                </div>
            </main>
        );
    };

    const six2ten = () => {
        return (
            <main>
                <div className='flex justify-center mt-[100px] mb-10'>

                    <div className='relative'>
                        <img src='./imgs/tailwind.png' className='w-[60px] h-[60px] mr-[120px] ml-[70px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-14'>Tailwind</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/sql.png' className='w-[60px] h-[60px] mr-[100px] '/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px]'>SQL</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/plsql.png' className='w-[80px] h-[80px] mr-[110px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-[15px]'>PL/SQL</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/git.png' className='w-[60px] h-[60px] mr-[120px] ml-[5px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] mr-[25px]'>GitHub</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/Python.png' className='w-[60px] h-[60px] mr-[70px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px]'>Python</p>
                    </div>

                </div>

            </main>
        );
    };

    const eleven2fifteen = () => {
        return (
            <main>
                <div className='flex justify-center mt-[100px] mb-[150px]'>

                    <div className='relative'>
                        <img src='./imgs/figma.png' className='w-[60px] h-[60px] mr-[120px] ml-[30px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-[20px]'>Figma</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/c.png' className='w-[60px] h-[60px] mr-[100px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-[10px]'>C#</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/java.png' className='w-[60px] h-[60px] mr-[400px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[80px] ml-[10px]'>Java</p>
                    </div>

                </div>
            </main>
        );
    };

    

    return(
        <div ref={ref}>
            <div id='skills' className='border border-4 rounded-md border-purple-600 bg-gray-900 mt-20 text-white shadow-xl shadow-black'>
                <div className='flex justify-center items-center mt-10 '>
                    <img src='./imgs/skill.png' className='w-[180px] h-[140px] mr-[30px]'/>
                    <h2 className=' flex justify-center text-3xl tracking-wide mt-1 mr-[60px] font-semibold'>{'<Skills/>'}</h2>
                </div>
                {one2five()}
                {six2ten()}
                {eleven2fifteen()}
            </div>
        </div>
    );
});

export default Skills;

