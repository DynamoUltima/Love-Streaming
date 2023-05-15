import { Combobox } from "@headlessui/react";
import MessageCard from "../components/ui/Cards/messageCard";
import { messages } from "../data/sample";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const History = () => {

    const [query, setQuery] = useState('')


    return (
        <div className="h-screen relative grid grid-cols-7 gap-4">
            {/* previously played */}
            <div className="overflow-auto col-span-6  md:col-span-5">


                <div className="flex flex-col space-y-4 px-4 ">
                    <div className="text-white text-3xl py-6">Previously Viewed</div>
                    <div className="  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-8 gap-y-12 ">
                        {
                            messages.map(item =>

                                <MessageCard
                                    key={item.snippet.title}
                                    image={item.snippet.thumbnails.high.url}
                                    name={item.snippet.title}
                                    url={item.id.videoId}
                                />

                            )

                        }
                    </div>
                </div>


            </div>


            {/* side bar */}
            <div className="hidden  md:col-span-2  md:flex flex-col p-4 text-white space-y-4">

                <Combobox onChange={() => { }} value=""   >
                    <div className="flex flex-row border-b-2 border-gray-600 border-spacing-1">
                    <Combobox.Button className=" flex items-center pr-2">
                        <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </Combobox.Button>

                    <Combobox.Input

                        placeholder="Search"
                        className="w-auto  focus:outline-none  py-2 pl-3 pr-10 text-sm leading-5 bg-grayblack text-gray-400 "

                        displayValue={() => query}
                        onChange={(event) => {
                            setQuery(event.target.value) 


                        }}

                    />

                    </div>
                    
                </Combobox>

                <div className="text-sm">Clear history</div>
                <div className="text-sm">Clear all data</div>
                <div className="text-sm">Report an issue</div>
                <div className="text-sm">Contact Support</div>

            </div>

        </div>

    );
}

export default History;