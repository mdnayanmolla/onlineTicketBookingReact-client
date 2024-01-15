import { useEffect, useState } from "react";
import { useForm } from "react-hook-form" 
import { FaCaretDown } from "react-icons/fa";
// import { FaCaretUp } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const FromSelect = () => {
    const { register } = useForm()
    const [countries, setCountries] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [selected, setSelected] = useState('')
    const [open, setOpen] = useState(false)
    useEffect(() => {
        fetch('https://restcountries.com/v2/all?fields=name')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>

            <div className="w-full relative">
                <label className="text-sm flex items-center text-[#dc3545]"><span className="pr-2"><FaMapLocationDot /></span> From</label>
                <div onClick={() => setOpen(!open)} className={`bg-white border-b border-[#e9e9e9] w-full text-sm py-3 flex items-center justify-between rounded ${!selected && "text-gray-700 cursor-pointer"}`}  >
                    {selected ? <input type="text" value={selected} {...register("from")} className="w-full focus:border-none focus:ring-0 focus:outline-none"/> : selected ? selected?.length > 25 ? selected?.substring(0, 25) + "..." : selected : 'Select Area'} <FaCaretDown size={20} className={`${open && 'rotate-180'}`} />
                </div>
                <ul className={` bg-white  overflow-y-auto mt-2  absolute top-[54px] rounded z-40 left-0 w-full ${open ? ' max-h-60 border-t border-[#e9e9e9]' : ' max-h-0'}`}>
                    <div className="  flex items-center sticky top-0 px-2 border-b border-[#e9e9e9] bg-white">
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.toLowerCase())} name="" id="" placeholder="Enter Country Name" className="placeholder:text-gray-700 placeholder:text-sm outline-none " />
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

        </div>
    );
};

export default FromSelect;