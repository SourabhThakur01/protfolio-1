
export default function Skills() {
    
    const one2four = () => {
        return (
            <main>
                <div>
                    <div className='flex justify-center mt-20'>

                        <div className='relative'>
                            <img src='./imgs/html.png' className='w-[80px] h-[80px] mr-[100px]'/>
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[90px] ml-[5px]'>HTML</p>
                        </div>

                        <div className='relative'>
                            <img src='./imgs/css.png' className='w-[80px] h-[80px] mr-[90px]'/>
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[90px] ml-[14px]'>CSS</p>
                        </div>

                        <div className='relative'>
                            <img src='./imgs/javascript.png' className='w-[80px] h-[80px] mr-[100px] ml-[25px]'/>
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[90px]'>JavaScript</p>
                        </div>

                        <div className='relative'>
                            <img src='./imgs/react.png' className='w-[80px] h-[80px] ml-[20px]'/>
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[90px] ml-[25px]'>React</p>
                        </div>

                    </div>
                </div>
            </main>
        );
    };

    const five2eight = () => {
        return (
            <main>
                <div className='flex justify-center mt-[100px] mb-10'>

                    <div className='relative'>
                        <img src='./imgs/node.png' className='w-[80px] h-[80px] mr-[100px] mt-[20px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[110px] ml-[5px]'>Node.js</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/tailwind.png' className='w-[80px] h-[80px] mr-[90px] ml-[30px] mt-[20px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide ml-[20px] top-[112px]'>Tailwind</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/sql.png' className='w-[80px] h-[80px] mr-[100px] ml-[45px] mt-[30px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[112px] ml-[50px]'>SQL</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/plsql.png' className='w-[100px] h-[100px] mt-[20px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[112px] ml-[10px]'>PL/SQL</p>
                    </div>
                </div>

            </main>
        );
    };

    const nine2twelve = () => {
        return (
            <main>
                <div className='flex justify-center mt-[100px] mb-10'>

                    <div className='relative'>
                        <img src='./imgs/git.png' className='w-[80px] h-[80px] mr-[100px] mt-[20px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[110px] ml-[5px]'>GitHub</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/Python.png' className='w-[80px] h-[80px] mr-[90px] ml-[15px] mt-[20px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[112px] ml-[10px]'>Python</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/figma.png' className='w-[80px] h-[80px] mr-[100px] ml-[25px] mt-[30px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[112px] ml-[30px]'>Figma</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/c.png' className='w-[80px] h-[80px] mt-[30px] ml-[20px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[112px] ml-[40px]'>C#</p>
                    </div>
                </div>

            </main>
        );
    };

    const thirteen = () => {
        return(
            <main>
                <div className='flex justify-center mt-[70px] mb-20'>
                    <div className='relative'>
                        <img src='./imgs/java.png' className='w-[80px] h-[80px] mt-[20px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[110px] ml-[15px]'>Java</p>
                    </div>
                </div>
            </main>
        );
    };

    return(
        <div className='border border-4 rounded-md border-purple-600 bg-gray-900 p-1 mt-20 text-white'>
            <div className='flex justify-center items-center mt-10 '>
                <img src='./imgs/skill.png' className='w-[180px] h-[140px] mr-[30px]'/>
                <h2 className=' flex justify-center text-3xl tracking-wide mt-1 mr-[60px] font-semibold'>{'<Skills/>'}</h2>
            </div>
  
            {one2four()}
            {five2eight()}
            {nine2twelve()}
            {thirteen()}

        </div>
    );
}



