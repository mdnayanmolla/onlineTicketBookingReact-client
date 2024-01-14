
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
// import { FaCaretUp } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";


const SelectDropdown = () => {
    const [countries, setCountries] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [selected, setSelected] = useState('')
    const [open, setOpen] = useState(false)

  useEffect(()=>{
    fetch('https://restcountries.com/v2/all?fields=name')
    .then(res=> res.json())
    .then(data=> setCountries(data))
  },[])
    return (
        <div className="w-72 font-medium h-80">
            <div 
             onClick={()=>setOpen(!open)}
             className={`bg-white w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"}`}>
              {selected? selected?.length>25 ? selected?.substring(0,25) + "...": selected: 'Select Area'} <FaCaretDown size={20} className={`${open && 'rotate-180'}`}/>
            </div>
            <ul className={`bg-white  overflow-y-auto mt-2 ${open? ' max-h-60' : ' max-h-0'}`}>
                <div className="flex items-center px-2 sticky top-0 bg-white">
                    <AiOutlineSearch size={18} className="text-gray-700"/>
                    <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value.toLowerCase())} name="" id="" placeholder="Enter Country Name" className="placeholder:text-gray-700 p-2 outline-none"/>
                </div>
                {
                    countries?.map((country)=> (
                        <li key={country.name} 
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white 
                         ${country?.name.toLowerCase() === selected?.toLocaleLowerCase() && 'bg-sky-700 text-white'}
                        duration-300 
                        ${country?.name.toLowerCase().startsWith(inputValue)? 
                        "block": "hidden"}`}
                        onClick={()=>{
                            if(country?.name?.toLowerCase() !== selected.toLocaleLowerCase()){
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
    );
};

export default SelectDropdown;