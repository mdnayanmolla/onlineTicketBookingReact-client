import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
const MenuBar = () => {
    return (
        <div className="px-[2%] fixed w-full bottom-1">
            <div className="bg-[#dc3545] w-full py-4 rounded-md">
               <div className="flex justify-evenly">
               <Link ><p className="flex justify-center flex-col items-center text-white uppercase space-y-1 font-bold hover:text-[#ffc106] duration-300"><span className="text-xl"><FaHome /></span> <span className="text-sm ">Home</span></p></Link>
               <Link> <p className="flex justify-center flex-col items-center text-white uppercase space-y-1 font-bold hover:text-[#ffc106] duration-300"><span className="text-xl"><IoTicketOutline /></span>  <span className="text-sm ">Tickets</span></p></Link>
               <Link> <p className="flex justify-center flex-col items-center text-white uppercase space-y-1 font-bold hover:text-[#ffc106] duration-300"><span className="text-xl"> <IoIosNotifications /></span> <span className="text-sm ">NOTICE</span></p></Link>
               <Link> <p className="flex justify-center flex-col items-center text-white uppercase space-y-1 font-bold hover:text-[#ffc106] duration-300"><span className="text-xl"><FaRegUser /></span> <span className="text-sm ">ACCOUNT</span></p> </Link>
               </div>
            </div>
        </div>
    );
};

export default MenuBar;