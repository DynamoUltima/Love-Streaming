import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import journalist from "../../public/journalist.jpeg"
import SearchBar from "../ui/searchBar";
import { useAuth } from "../context/authContext";
import { Combobox } from "@headlessui/react";

const Navbar = () => {
    let tablink = [{ name: 'All' }, { name: 'Message' }, { name: 'Music' }]


    const router = useRouter();
    const { isSearch, search, setSearch } = useAuth();
    const [isOpen, setIsOpen] = useState(true);
    const [query, setQuery] = useState('')



    useEffect(()=>{
        if(query.length==0){
            setSearch(false)
        }
    
        if(query.length!=0){
            if(router.pathname !='/browse'){
                router.push('/browse')
            }
            
            setSearch(true)
        }

    },[query,router])


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    
    return (
        <>
            <div className=" hidden md:flex  flex-row  p-2 m-2 items-center    justify-between px-4">
                {/* Search */}
                {/* <div className="flex flex-row w-96 bg-mattblack items-center rounded-md px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input type="text" placeholder="Search" className="ml-6  bg-mattblack p-2 text-gray-200 focus:outline-none" />

                </div> */}


                <div className="flex">

                    <Combobox onChange={()=>{}}  value=""  >
                        <Combobox.Input
                        placeholder="Search"
                            className="w-full border-none rounded-md py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"

                            displayValue={() => query}
                            onChange={(event) => {
                                setQuery(event.target.value)
                                
                                
                        }}

                        />
                    </Combobox>



                    <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>




                <div className=" flex flex-row items-center space-x-4">
                    <BellIcon className="w-6 h-6 text-white" />

                    <div className="relative w-10 h-10  bg-white rounded-full overflow-clip ">
                        <Image alt="profileImage" layout="fill" objectFit="cover" src={journalist} />


                    </div>

                </div>

            </div>
            <div className=" md:hidden   h-16">

                <div className=" flex flex-row justify-between items-center p-4">
                    <div className="text-gray-200">Good Evening</div>
                    <BellIcon className="w-6 h-6 text-white" />


                </div>

            </div>
        </>

    );
}

export default Navbar;