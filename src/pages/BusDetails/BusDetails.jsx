import Navbar from "../../Shared/Navbar/Navbar";
import busImg from '../../assets/singleBus.png'
import { CiLocationOn } from "react-icons/ci";
import { FaBus } from "react-icons/fa";

import TabsData from "../../component/TabsPart/TabsData/TabsData";

const BusDetails = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <div className="px-[2%] py-6">
                    <div className="flex">
                        <div>
                            <img src={busImg} alt="" className="h-16 w-20" />
                        </div>
                        <div className="w-full pl-4">
                            <h2 className="font-bold">Niloy Poribohon</h2>
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" checked />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#dc3545]" />
                            </div>
                            <div className="flex justify-between w-full text-sm">
                                <p className="flex items-center"><span className="text-[#dc3545] pr-2"><CiLocationOn /></span> <span>Dhaka to Bogura</span></p>
                                <p className="flex items-center"><span className="text-[#dc3545] px-2"> <FaBus /></span> <span> St. $5</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-t flex px-[2%]">
                    <div className="flex-1 py-7 space-y-4">
                        <div >
                            <p className="text-xs">Wifi</p>
                            <p className="text-sm font-semibold">Access in the bus</p>
                        </div>
                        <div>
                            <p className="text-xs">Dinner / Lunch</p>
                            <p className="text-sm font-semibold">Yes</p>
                        </div>
                        <div>
                            <p className="text-xs">Essentials</p>
                            <p className="text-sm font-semibold">Pillow, Water</p>
                        </div>
                    </div>
                    <div  className="flex-1 py-7 space-y-4">
                        <div>
                            <p className="text-xs">AC</p>
                            <p className="text-sm font-semibold">Ac is available</p>
                        </div>
                        <div>
                            <p className="text-xs">Safety Features</p>
                            <p className="text-sm font-semibold">Sanitized, Masks</p>
                        </div>
                        <div>
                            <p className="text-xs">Snacks</p>
                            <p className="text-sm font-semibold">Juice / shake</p>
                        </div>
                    </div>
                </div>
                <TabsData></TabsData>
            </div>
        </div>
    );
};

export default BusDetails;