export default function Qualifications() {

    const diploma = () => {
        return(
            <main>
                <div className="border border-4 max-w-fit border-y-purple-600 rounded-md border-gray-900 bg-gray-900 p-7 mt-10 ml-10 text-white">
                    <p className="text-4xl text-center mb-1 mt-6">Diploma</p>
                    <p className="text-2xl text-center mb-5">Software Development</p>
                </div>
            </main>
        );
    };

    return(
        <main>
            <div className="flex flex-column border border-4 border-y-purple-600 rounded-md border-gray-900 bg-gray-900 p-7 mt-10 ml-10 text-white">
                <img src='./imgs/study.png' className='w-[180px] h-[180px] ml-[245px] mt-[3px]'/>
                <h2 className='text-3xl tracking-wide mt-[60px] font-semibold'>{'<Qualifications/>'}</h2>
            </div>
            {diploma()}
        </main>
    )
}