export default function Qualifications() {

    const diploma1 = () => {
        return(
            <main>
                <button className="border border-2 max-w-fit rounded-md border-black bg-gray-800 p-3 mt-10 ml-10 text-white shadow-lg shadow-black hover:shadow-blue-700">
                    <p className="text-3xl text-center mb-1 mt-6">Diploma</p>
                    <p className="text-xl text-center mb-5">Software Development</p>
                </button>
            </main>
        );
    };

    const diploma2 = () => {
        return(
            <main>
                <button className="border border-2 max-w-fit rounded-md border-black bg-gray-800 p-3 mt-10 ml-10 text-white shadow-lg shadow-black hover:shadow-green-700">
                    <p className="text-3xl text-center mb-1 mt-6">Diploma</p>
                    <p className="text-xl text-center mb-5">Computer Application</p>
                </button>
            </main>
        );
    };

    const diploma3 = () => {
        return(
            <main>
                <button className="border border-2 max-w-fit rounded-md border-black bg-gray-800 py-3 px-14 mt-10 ml-10 text-white shadow-lg shadow-black hover:shadow-yellow-700">
                    <p className="text-3xl text-center mb-1 mt-6">Diploma</p>
                    <p className="text-xl text-center mb-5">High School</p>
                </button>
            </main>
        );
    };



    return(
        <main className="border border-4 border-y-purple-600 rounded-md border-gray-900 bg-gray-900 p-7 mt-20 text-white shadow-xl shadow-black ">
            <div >
                <div className="flex justify-center ">
                    <img src='./imgs/study.png' className='w-[160px] h-[160px] ml-[1px] mt-[3px]'/>
                    <h2 className='text-3xl tracking-wide mt-[60px] font-semibold'>{'<Qualifications/>'}</h2>
                </div>
                <div className="flex justify-center mb-10">
                    {diploma1()}
                    {diploma2()}
                    {diploma3()}
                </div>
            </div>

        </main>
    )
}