export default function Projects() {
    
    const p1 = () => {
        return(
            <main>
                <div className=" ml-[70px] border border-4 rounded-full max-w-fit border-yellow-600 bg-gray-900 p-4 mt-[60px] text-white">
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

    return (
        <main>
            <h2 className='text-3xl ml-[465px] tracking-wide mt-20 font-semibold ml-[450px]'>{'<Projects/>'}</h2>
            <div className="flex flex-column">
                {p1()}
                {p2()}
                {p3()}
            </div>
            <div className="flex flex-column">
                {p1()}
                {p2()}
                {p3()}
            </div>
        </main>
    )
}