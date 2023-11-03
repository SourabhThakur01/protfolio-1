
export default function Skills() {
    
    const one2four = () => {
        return (
            <main>
                <div>
                    <div className='flex flex-column mt-20 ml-[190px]'>

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
                            <img src='./imgs/react.png' className='w-[80px] h-[80px]'/>
                            <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[90px] ml-[5px]'>React</p>
                        </div>

                    </div>
                </div>
            </main>
        );
    };

    const five2eight = () => {
        return (
            <main>
                <div className='flex flex-column mt-[100px] ml-[190px] mb-10'>

                    <div className='relative'>
                        <img src='./imgs/node.png' className='w-[80px] h-[80px] mr-[100px] ml-[5px] mt-[20px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[110px] ml-[5px]'>Node.js</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/tailwind.png' className='w-[80px] h-[80px] mr-[90px] ml-[15px] mt-[20px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[112px]'>Tailwind</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/sql.png' className='w-[80px] h-[80px] mr-[100px] ml-[25px] mt-[30px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[112px] ml-[30px]'>SQL</p>
                    </div>

                    <div className='relative'>
                        <img src='./imgs/plsql.png' className='w-[100px] h-[100px] mr-[180px] mt-[20px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[112px] ml-[10px]'>PL/SQL</p>
                    </div>
                </div>

            </main>
        );
    };

    const nine2twelve = () => {
        return (
            <main>
                <div className='flex flex-column mt-[100px] ml-[190px] mb-10'>

                    <div className='relative'>
                        <img src='./imgs/git.png' className='w-[80px] h-[80px] mr-[100px] ml-[5px] mt-[20px]'/>
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
                        <img src='./imgs/c.png' className='w-[80px] h-[80px] mr-[180px] mt-[30px]'/>
                        <p className=' absolute text-gray-300 text-2xl font-medium tracking-wide top-[112px] ml-[20px]'>C#</p>
                    </div>
                </div>

            </main>
        );
    };

    const thirteen = () => {
        return(
            <main>
                <div className='flex flex-column mt-[70px] ml-[490px] mb-20'>
                    <div className='relative'>
                        <img src='./imgs/java.png' className='w-[80px] h-[80px] mr-[100px] ml-[5px] mt-[20px]'/>
                        <p className='absolute text-gray-300 text-2xl font-medium tracking-wide top-[110px] ml-[15px]'>Java</p>
                    </div>
                </div>
            </main>
        );
    };

    return(
        <div className='border border-4 rounded-md border-purple-600 bg-gray-900 p-1 mt-20 text-white'>
            <h2 className='text-3xl ml-[455px] tracking-wide mt-10 font-semibold'>{'<Skills/>'}</h2>
            {one2four()}
            {five2eight()}
            {nine2twelve()}
            {thirteen()}
        </div>
    );
}



