import React from "react";

export default function Profile() {
    const profilePic = () => {
        return (
            <div className='flex justify-center text-center'>
                <img src='./imgs/avtar.avif' className=' l-[400px] w-[300px] '/>
            </div>
        );
    };

    const aboutProfile = () => {
        return(
            <div className='text-center'>
             <p className='text-3xl font-semibold'>Sourabh Thakur</p><br />
             <p className=' text-xl font-semibold'>{'<Software Develepor & All Time Learner/>'}</p>
           </div>
        );
    };

    const socialLinks = () => {
        return(
            <div className='flex flex-column justify-center mt-5 '>
             <a href='https://www.facebook.com/profile.php?id=100083941508310'>
               <img src='./imgs/fb.png' className='w-[80px] h-[80px] mr-4 transform transition-transform duration-300 hover:scale-110'/>
             </a>
             <a href='https://www.instagram.com/sourabh.thakur_01/'>
               <img src='./imgs/Insta.png' className='w-[78px] h-[80px] mr-4 transform transition-transform duration-300 hover:scale-110'/>
             </a>
             <a href=''>
               <img src='./imgs/twitter.png' className='w-[80px] h-[80px] mr-4 transform transition-transform duration-300 hover:scale-110 '/>
             </a>
             <a href='https://www.linkedin.com/in/sourabh-thakur2530/'>
               <img src='./imgs/linkdn.png' className='w-[80px] h-[80px] mr-4 transform transition-transform duration-300 hover:scale-110'/>
             </a>
           </div>
        );
    };

    return (
        <div>
            {profilePic()}
            {aboutProfile()}
            {socialLinks()}
        </div>
    );
}
