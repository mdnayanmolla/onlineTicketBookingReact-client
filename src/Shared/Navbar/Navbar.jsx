import { IoIosArrowBack } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-[#dc3545] px-[2%] py-2">
             <div className="flex justify-between">
                <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center hover:bg-black duration-300 hover:text-white">
                    <span><IoIosArrowBack /></span>
                </div>
                <div className="flex items-center">
                    <span className="text-white text-3xl"><FaBars /></span>
                </div>
             </div>
        </div>
    );
};

export default Navbar;