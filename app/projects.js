export default function Projects() {
    
    const p1 = () => {
        return(
            <main>
                <div className=" ml-[60px] border border-4 rounded-full max-w-fit border-yellow-600 bg-gray-900 p-4 mt-[60px] text-white">
                    <button className='text-bold text-3xl m-3'>Flight Booking</button>
                </div>
            </main>
        );
    };

    const p2 = () => {
        return(
            <main>
                <div className=" ml-[100px] border border-4 rounded-full max-w-fit border-green-600 bg-gray-900 p-4 mt-[60px] text-white">
                    <button className='text-bold text-3xl m-3'>Music App</button>
                </div>
            </main>
        );
    };

    const p3 = () => {
        return(
            <main>
                <div className=" ml-[100px] border border-4 rounded-full max-w-fit border-red-400 bg-gray-900 p-4 mt-[60px] text-white">
                    <button className='text-bold text-3xl m-3'>Gamer's App</button>
                </div>
            </main>
        );
    };

    const p4 = () => {
        return(
            <main>
                <div className=" ml-[65px] border border-4 rounded-full max-w-fit border-blue-400 bg-gray-900 p-4 mt-[60px] text-white">
                    <button className='text-bold text-3xl m-3'>Lrn. Mgn Sys</button>
                </div>
            </main>
        );
    };

    const p5 = () => {
        return(
            <main>
                <div className=" ml-[110px] border border-4 rounded-full max-w-fit border-pink-400 bg-gray-900 p-4 mt-[60px] text-white">
                    <button className='text-bold text-3xl m-3 ml-10 mr-10'>Sorting</button>
                </div>
            </main>
        );
    };

    const p6 = () => {
        return(
            <main>
                <div className=" ml-[100px] border border-4 rounded-full max-w-fit border-lime-400 bg-gray-900 p-4 mt-[60px] text-white">
                    <button className='text-bold text-3xl m-3 ml-10 mr-10'> Protfolio </button>
                </div>
            </main>
        );
    };

    const p7 = () => {
        return(
            <main>
                <div className=" ml-[60px] border border-4 rounded-full max-w-fit border-yellow-600 bg-gray-900 p-4 mt-[60px] text-white">
                    <button className='text-bold text-3xl m-3 ml-8 mr-8'>Book Yatra</button>
                </div>
            </main>
        );
    };

    const p8 = () => {
        return(
            <main>
                <div className=" ml-[100px] border border-4 rounded-full max-w-fit border-green-600 bg-gray-900 p-4 mt-[60px] text-white">
                    <button className='text-bold text-3xl m-3 ml-5 mr-5'>Music App</button>
                </div>
            </main>
        );
    };

    const p9 = () => {
        return(
            <main>
                <div className=" ml-[100px] border border-4 rounded-full max-w-fit border-red-400 bg-gray-900 p-4 mt-[60px] text-white">
                    <button className='text-bold text-3xl m-3 ml-10 mr-10'>Others+</button>
                </div>
            </main>
        );
    };

    return (
        <main>
            <h2 className='text-3xl ml-[465px] tracking-wide mt-20 font-semibold ml-[430px]'>{'<Projects/>'}</h2>
            <div className="flex flex-column">
                {p1()}
                {p2()}
                {p3()}
            </div>
            <div className="flex flex-column">
                {p4()}
                {p5()}
                {p6()}
            </div>
            <div className="flex flex-column mb-[70px]">
                {p7()}
                {p8()}
                {p9()}
            </div>
        </main>
    )
}