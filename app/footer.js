import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {


    const foot = () => {
        return(
            <main className="border border-4 border-y-purple-600 border-gray-900 rounded-md bg-gray-900 shadow-lg shadow-purple-600 mt-[100px] p-20">
                <p className='text-2xl font-semibold text-center text-white'>SAY HELLO!</p>
                <form className="flex justify-center mt-14">
                    <div className="">
                        <input type='text' placeholder='First Name' className='border border border-white rounded-md bg-gray-900 text-white p-1 pl-2 pr-2 ml-10'/><br/>
                        <input type='text' placeholder='Last Name' className='border border border-white rounded-md bg-gray-900 text-white p-1 pl-2 pr-2 mt-10 ml-10'/><br/>
                        <input type='email' placeholder='Your Email' className='border border border-white rounded-md bg-gray-900 text-white p-1 pl-2 pr-2 mt-10 ml-10'/>
                    </div>
                    <input type='text' placeholder='Your Message' className='border border border-white rounded-md bg-gray-900 text-white p-1 pl-2 pr-2 ml-[120px]'/>
                </form>
                <input type='submit' value='Send' className='ml-[440px] mt-10 border border border-white rounded-md bg-gray-900 text-white p-1 pl-3 px-4 ml-[120px] mt-10 '/>
            </main>
        );
    };

    return(
        <main ref={ref}>
            {foot()}
        </main>
            
    )
});

export default Footer;