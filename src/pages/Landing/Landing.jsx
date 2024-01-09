import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { TbWorld } from "react-icons/tb";
import { FaBusSimple } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='relative'>
            <Swiper autoplay={true} Keyboard={true} modules={[Autoplay, Keyboard]} className="mySwiper">
                <SwiperSlide >
                    <div className='bg-[#dc3545] h-screen flex justify-center items-center'>
                        <div className='text-center'>
                            <div className='flex justify-center'> <span className='text-center text-7xl text-white'><TbWorld /></span></div>
                            <h3 className='text-2xl text-white font-bold'>Book Your onlineBus ticket</h3>
                            <p className='text-white font-semibold'>I am not susperstitious, but I am a little stitous</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white h-screen flex justify-center items-center'>
                        <div className='text-center'>
                            <div className='flex justify-center'><span className='text-center text-5xl text-[#dc3545]'><FaBusSimple /></span></div>
                            <h3 className='text-2xl text-[#dc3545] font-bold'>Digital Bus Management System</h3>
                            <p className='text-[#dc3545] font-semibold'>I am not susperstitious, but I am a little stitous</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#dc3545] h-screen flex justify-center items-center'>
                        <div className='text-center'>
                            <div className='flex justify-center'> <span className='text-center text-7xl text-white'><IoNotificationsSharp /></span></div>
                            <h3 className='text-2xl text-white font-bold'>Through notifications keep yourself update</h3>
                            <p className='text-white font-semibold'>I am not susperstitious, but I am a little stitous</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='px-[2%] fixed bottom-4 left-0 w-full z-40'>
                <Link to='/registration'>  <button className='bg-white border border-[#dc3545] rounded-md text-center w-full text-[#dc3545] py-4'>GET STARTED  </button></Link>
            </div>
        </div>
    );
};

export default Landing;