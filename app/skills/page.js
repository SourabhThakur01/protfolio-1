import React, { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
    
    const skills = () => {
        return (
             <main>
                <div className=' hidden md:grid grid-cols-5 gap-10 px-16 justify-items-center mt-10 text-gray-300 text-2xl font-medium'>
                    <div className='space-y-5'>
                        <img src='./imgs/html.png' className='w-[60px] h-[60px]'/>
                        <p className=''>HTML</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/css.png' className='w-[60px] h-[60px]'/>
                        <p className=''>CSS</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/javascript.png' className='w-[60px] h-[60px] ml-8'/>
                        <p className=''>JavaScript</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/react.png' className='w-[60px] h-[60px]'/>
                        <p className=''>React</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/node.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Node.js</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/tailwind.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Tailwind</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/sql.png' className='w-[60px] h-[60px]'/>
                        <p className=''>SQL</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/plsql.png' className='w-[60px] h-[60px]'/>
                        <p className=''>PL/SQL</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/git.png' className='w-[60px] h-[60px]'/>
                        <p className=''>GitHub</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/Python.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Python</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/figma.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Figma</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/c.png' className='w-[60px] h-[60px]'/>
                        <p className=''>C#</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/java.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Java</p>
                    </div>
                </div>
                <div className='md:hidden text-white text-base text-semibold font-serif grid grid-cols-2 justify-items-center gap-5'>
                    <ul className='list-disc'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Tailwind</li>
                        <li>SQL</li>
                    </ul>
                    <ul className='list-disc'>
                        <li>PL/SQL</li>
                        <li>GitHub</li>
                        <li>Python</li>
                        <li>Figma</li>
                        <li>C#</li>
                        <li>Java</li>
                    </ul>
                </div>
            </main>
                
        );
    };


    return(
        <div ref={ref}>
            <div className=''>
                <div className='mt-20 border bg-gray-900 pb-10 px-10 pt-10 mx-10 max-w-screen border-black border-x-4 rounded-md shadow-lg shadow-black border-x-purple-600'>
                    <div className='flex justify-center items-center pb-5 md:mb-20 text-white '>
                        <img src='./imgs/skill.png' className='w-[180px] h-[140px] mr-[30px] hidden md:block'/>
                        <h2 className=' md:flex justify-center font-serif text-3xl tracking-wide md:mt-1 md:mr-[60px] font-semibold'>{'<Skills/>'}</h2>
                    </div>
                    {skills()}
                </div>
            </div>
        </div>
    );
});

Skills.displayName = 'Skills';
export default Skills;

