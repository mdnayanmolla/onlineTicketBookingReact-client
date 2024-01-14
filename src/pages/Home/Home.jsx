import Navbar from "../../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form"
// import { Link } from "react-router-dom";
// import { FaMapLocation } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
// import { FaCaretUp } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const Home = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    const [countries, setCountries] = useState(null)
    const [districts, setDistrict] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [selected, setSelected] = useState('')
    const [open, setOpen] = useState(false)
    const [openD, setOpenD] = useState(false)

    useEffect(() => {
        fetch('https://restcountries.com/v2/all?fields=name')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    useEffect(() => {
        fetch('../../../public/district.json')
            .then(res => res.json())
            .then(data => setDistrict(data))
    }, [])
    return (

        <div>

            <Navbar></Navbar>
            <div className="bg-[#dc3545] w-full pb-4">
                <div className="px-[2%] pt-5 ">
                    <div className=" w-full bg-white">
                        <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-10">
                            {/**Coustom select type End*/}
                            <div className="w-full relative">
                                <label className="text-sm flex items-center text-[#dc3545]"><span className="pr-2"><FaMapLocationDot /></span> From</label>
                                <div onClick={() => setOpen(!open)} className={`bg-white border-b border-[#e9e9e9] w-full text-sm py-3 flex items-center justify-between rounded ${!selected && "text-gray-700"}`}  >
                                    {selected ? <input type="text" value={selected} {...register("from")} /> : selected ? selected?.length > 25 ? selected?.substring(0, 25) + "..." : selected : 'Select Area'} <FaCaretDown size={20} className={`${open && 'rotate-180'}`} />
                                </div>
                                <ul className={`bg-white  overflow-y-auto mt-2  absolute top-[54px] rounded z-40 left-0 w-full ${open ? ' max-h-60 border-t border-[#e9e9e9]' : ' max-h-0'}`}>
                                    <div className="flex items-center sticky top-0 px-2 border-b border-[#e9e9e9] bg-white">
                                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.toLowerCase())} name="" id="" placeholder="Enter Country Name" className="placeholder:text-gray-700 placeholder:text-sm outline-none" />
                                    </div>
                                    {
                                        countries?.map((country) => (
                                            <li key={country.name}
                                                className={`py-2 px-2 text-sm hover:bg-[#dc3545] hover:text-white 
                                                ${country?.name.toLowerCase() === selected?.toLocaleLowerCase() && 'bg-sky-700 text-white'}
                                                 duration-300 
                                                  ${country?.name.toLowerCase().startsWith(inputValue) ?
                                                        "block" : "hidden"}`}
                                                onClick={() => {
                                                    if (country?.name?.toLowerCase() !== selected.toLocaleLowerCase()) {
                                                        setSelected(country?.name)
                                                        setOpen(false)
                                                        setInputValue('')
                                                    }
                                                }}
                                            >
                                                {country?.name}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            {/**Coustom select type End */}
                            {/**Coustom select type End*/}
                            <div className="w-full relative mt-5">
                                <label className="text-sm flex items-center text-[#dc3545]"><span className="pr-2"><FaLocationDot /></span> To</label>
                                <div onClick={() => setOpenD(!openD)} className={`bg-white border-b border-[#e9e9e9] w-full text-sm py-3 flex items-center justify-between rounded ${!selected && "text-gray-700"}`}  >
                                    {selected ? <input type="text" value={selected} {...register("from")} /> : selected ? selected?.length > 25 ? selected?.substring(0, 25) + "..." : selected : 'Select Area'} <FaCaretDown size={20} className={`${openD && 'rotate-180'}`} />
                                </div>
                                <ul className={`bg-white  overflow-y-auto mt-2  absolute top-[54px] rounded z-40 left-0 w-full ${openD ? ' max-h-60 border-t border-[#e9e9e9]' : ' max-h-0'}`}>
                                    <div className="flex items-center sticky top-0 px-2 border-b border-[#e9e9e9] bg-white">
                                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.toLowerCase())} name="" id="" placeholder="Enter Country Name" className="placeholder:text-gray-700 placeholder:text-sm outline-none" />
                                    </div>
                                    {
                                        districts?.map((district) => (
                                            <li key={district.name}
                                                className={`py-2 px-2 text-sm hover:bg-[#dc3545] hover:text-white 
                                                ${district?.name.toLowerCase() === selected?.toLocaleLowerCase() && 'bg-sky-700 text-white'}
                                                 duration-300 
                                                  ${district?.name.toLowerCase().startsWith(inputValue) ?
                                                        "block" : "hidden"}`}
                                                onClick={() => {
                                                    if (district?.name?.toLowerCase() !== selected.toLocaleLowerCase()) {
                                                        setSelected(district?.name)
                                                        setOpenD(false)
                                                        setInputValue('')
                                                    }
                                                }}
                                            >
                                                {district?.name}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            {/**Coustom select type End */}
                            <div className="mt-5">
                                <input type="text"  {...register("area1111")} />
                            </div>
                            <button type="submit" className='mt-7 text-sm bg-[#dc3545]   rounded-md text-center w-full text-white py-3 hover:bg-[#c82333] duration-500'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

