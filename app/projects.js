import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => (
    <a href='./projects' ref={ref} className=''>
        <div className='border border-black shadow-black shadow-lg bg-gray-900 p-10 px-24 md:p-20 md:w-[400px] text-white font-bold font-serif text-3xl md:text-4xl text-center border border-y-4 border-y-purple-600 rounded-lg hover hover:shadow-lg hover:shadow-purple-600 raise'>Projects</div>
    </a>
));

Projects.displayName = 'Projects';
export default Projects;
