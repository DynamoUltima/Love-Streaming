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
            <div className=" hidden md:flex flex-row  p-2 m-2 items-center justify-between px-2">
                <div className="w-8/12">
                    <Combobox>
                        <Combobox.Input
                        placeholder="Search"
                            className="w-full h-10 
                                rounded-md 
                                px-4 bg-black/[.3] 
                                focus:border-transparent 
                                focus:outline-none
                                text-white/[.5]"

                            displayValue={() => query}
                            onChange={(event) => {
                                setQuery(event.target.value)
                            }}
                        />
                    </Combobox>



                    <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>




                <div className=" flex flex-row items-center space-x-4 mr-4">
                    <BellIcon className="w-6 h-6 text-white/[.4]" />

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