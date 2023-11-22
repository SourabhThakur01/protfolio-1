import React from "react";

export default function Profile() {
    const profilePic = () => {
        return (
            <div className='flex justify-center text-center mt-10 border bg-gray-900 border-black rounded-xl shadow-lg shadow-black'>
                <img src='./imgs/profile.png' className=' l-[500px] w-[400px] '/>
            </div>
        );
    };


    const aboutProfile = () => {
      return(
          <div className='text-center mt-10 mb-5'>
              <p className="text-3xl font-semibold mb-1">Sourabh Thakur</p>
              <p className="text-xl font-semibold">{'<Software Developer & All Time Learner/>'}</p>
          </div>
      );
  };
  

    const socialLinks = () => {
        return(
            <div className='flex flex-column justify-center mt-5 mb-7'>
             <a href='https://www.facebook.com/profile.php?id=100083941508310'>
               <img src='./imgs/github.png' className='w-[40px] h-[40px] mr-7 transform transition-transform duration-300 hover:scale-125'/>
             </a>
             <a href='https://www.instagram.com/sourabh.thakur_01/'>
               <img src='./imgs/instagram.png' className='w-[40px] h-[40px] mr-7 transform transition-transform duration-300 hover:scale-125'/>
             </a>
             <a href=''>
               <Image src='./imgs/twitter.png' className='w-[40px] h-[40px] mr-7 transform transition-transform duration-300 hover:scale-125'/>
             </a>
             <a href='https://www.linkedin.com/in/sourabh-thakur2530/'>
               <img src='./imgs/linkdn.png' className='w-[40px] h-[40px] mr-7 transform transition-transform duration-300 hover:scale-125'/>
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
