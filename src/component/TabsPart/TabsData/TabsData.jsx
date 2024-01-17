import PropTypes from 'prop-types';
import { useState } from 'react';
import BottomBtn from '../../BottomBtn/BottomBtn';
import reviewMan1 from '../../../assets/r1.jpg'
import reviewMan2 from '../../../assets/r2.jpg'
import { FaCircleInfo } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

const TabsData = () => {
    const [toogle, setToogle] = useState(1)
    const tabToggle = (id) => {
        setToogle(id)
    }
    return (
        <div className="pb-10">
            <div className="">
                <div className=" flex justify-between gap-4 border-b py-1 px-[2%]">
                    <button onClick={() => tabToggle(1)} className={`${toogle === 1 ? "bg-[#dc3545] text-white hover:bg-[#dc3545] hover:text-white" : ''} text-[#dc3545] hover:text-[#0791be]  duration-500 w-full py-2 rounded flex items-center justify-center`}><span className='pr-2'><FaCircleInfo /></span>Info</button>
                    <button onClick={() => tabToggle(2)} className={`${toogle === 2 ? "bg-[#dc3545] text-white hover:bg-[#dc3545] hover:text-white" : ''}  text-[#dc3545] hover:text-[#0791be]  duration-500 w-full py-2 rounded flex items-center justify-center`}> <span className='pr-2'><FaRegStar /></span>Reviews</button>
                    <button onClick={() => tabToggle(3)} className={`${toogle === 3 ? "bg-[#dc3545] text-white hover:bg-[#dc3545] hover:text-white"  : ''}  text-[#dc3545] hover:text-[#0791be]  duration-500 w-full py-2 rounded flex items-center justify-center`}><span className='pr-2'><FaClockRotateLeft /></span> Pic Up</button>
                </div>
                <div className="">
                    <div className={`${toogle === 1 ? "block duration-500 bg-[#f8f9fa] px-[2%]" : "hidden"}`}>
                        <div className='py-4'>
                            <h3 className='text-[#233e52] font-bold'>About Niloy Poribohon</h3>
                            <p className='text-xs py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className={`${toogle === 2 ? "block duration-500 px-[2%]" : "hidden"}`}>
                        <div className='py-4'>
                            <div className='bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 pb-6'>
                                <div className='flex pt-5'>
                                    <div>
                                        <img src={reviewMan1} alt="" className='w-full rounded-full' />
                                    </div>
                                    <div className='flex justify-between items-center  w-full'>
                                        <div className='flex-1 pl-4'>
                                            <h5 className='text-sm font-bold '>Mike Jhon</h5>
                                            <div className='flex items-center'>
                                           <div className="rating rating-xs">
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" checked />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                            </div> 
                                            <p className='text-[#dc3545] text-sm pl-2'>Good</p>
                                           </div>
                                        </div>
                                        <div className=''>
                                            <p className='text-xs'>24/03/2020</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-xs pb-3'>Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className='bg-white rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 mt-5 pb-6'>
                                <div className='flex pt-5'>
                                    <div>
                                        <img src={reviewMan2} alt="" className='w-full rounded-full' />
                                    </div>
                                    <div className='flex justify-between items-center  w-full'>
                                        <div className='flex-1 pl-4'>
                                            <h5 className='text-sm font-bold '>Mike Jhon</h5>
                                           <div className='flex items-center'>
                                           <div className="rating rating-xs">
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" checked />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                            </div> 
                                            <p className='text-[#dc3545] text-sm pl-2'>Not Good</p>
                                           </div>
                                        </div>
                                        <div className=''>
                                            <p className='text-xs'>24/03/2020</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-xs pt-3'>Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
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
TabsData.propTypes = {
    items: PropTypes.object
}

export default TabsData;