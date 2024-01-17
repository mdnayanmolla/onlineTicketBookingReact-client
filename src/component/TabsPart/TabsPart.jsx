import TabsData from "./TabsData/TabsData";

const items =[
    { title: "Info",    content: 'Test Content 1'},
    { title: "Reviews", content: 'Test Content 2'},
    { title: "Pick Up", content: 'Test Content 3'},
 ]

const TabsPart = () => {
    return (
        <div className="pb-10">
        <div className="">
            <div className=" flex justify-between gap-4 border-b py-1 px-[2%]">
                <button onClick={() => tabToggle(1)} className={`${toogle === 1 ? "bg-[#dc3545] text-white" : ''} text-[#dc3545] hover:text-white hover:bg-[#dc3545] duration-500 w-full py-2 rounded`}>Info</button>
                <button onClick={() => tabToggle(2)} className={`${toogle === 2 ? "bg-[#dc3545] text-white" : ''}  text-[#dc3545] hover:text-white hover:bg-[#dc3545] duration-500 w-full py-2 rounded`}>Reviews</button>
                <button onClick={() => tabToggle(3)} className={`${toogle === 3 ? "bg-[#dc3545] text-white" : ''}  text-[#dc3545] hover:text-white hover:bg-[#dc3545] duration-500 w-full py-2 rounded`}>Pic Up</button>
            </div>
            <div className="">
                <div className={`${toogle === 1 ? "block duration-500 bg-[#f8f9fa] px-[2%]" : "hidden"}`}>
                    <div className='py-4'>
                        <h3 className='text-[#233e52] font-bold'>About Niloy Poribohon</h3>
                        <p className='text-xs py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className={`${toogle === 2 ? "block duration-500 px-[2%]" : "hidden"}`}>
                    <h3>Reviews</h3>
                </div>
                <div className={`${toogle === 3 ? "block duration-500 px-[2%] bg-[#f8f9fa] py-4" : "hidden"}`}>
                    <div className='bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4'>
                        <div className='space-y-3'>
                            <h3 className='font-bold text-[#233e52] pt-6'>Boarding Point Selected</h3>
                            <hr></hr>
                            <h3 className='text-sm pb-6'><span className='font-bold pr-4'>4:30 </span> <span className='font-bold'>Opp. Bus Stand Nilo Poribohon</span> <span className='text-xs'>Opp. Bus Stand</span></h3>
                        </div>
                    </div>
                    <div className='bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 mt-5'>
                        <div className='space-y-3'>
                            <h3 className='font-bold text-[#233e52] pt-6'>Droping Point Selected</h3>
                            <hr></hr>
                            <h3 className='text-sm pb-6'><span className='font-bold pr-4'>4:30 </span> <span className='font-bold'>Opp. Bus Stand Nilo Poribohon</span> <span className='text-xs'>Opp. Bus Stand</span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[2%]'>
             <BottomBtn title="BOOK YOUR SEATS NOW"></BottomBtn>
            </div>
        </div>  
    </div>
    );
};

export default TabsPart;
