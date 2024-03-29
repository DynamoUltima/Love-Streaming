import Image from "next/image";
import SearchChips from "./Chips/searchChips";
import RisingClouds from "/public/rising-clouds.jpg"
import BasicChips from "./Chips/basicChips";
import MessageTiles from "./Tiles/messageTiles";
import RecentCard from "./Cards/recentCard";
import { messages } from "../../data/sample";

const SearchDelegate = () => {
    return (
        <>
            {/* chips */}
            <div className=" flex flex-col  px-5 space-y-6 overflow-auto">
                <div className="flex flex-row space-x-2 overflow-auto">
                    <SearchChips title={'All'} />
                    <SearchChips title={'5 mins'} />
                    <SearchChips title={'Audio Podcast'} />
                </div>


                {/* search display */}
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 md:gap-4 gap-8  ">

                    {/* Top Results */}
                    <div className="flex flex-col space-y-2">
                        <div className="text-white">Top Results</div>

                        <div className=" flex flex-col justify-center bg-gray-800 rounded-xl h-72 p-4 space-y-2">

                            <div className="relative w-20  aspect-square">
                                <Image layout="fill" src={RisingClouds} objectFit="cover" className="rounded-md" />
                            </div>



                            <div className="text-white">

                                Five ways to be Exceedingly fruitful
                            </div>

                            <div>
                                <BasicChips title={'5 mins'} />
                            </div>


                        </div>




                    </div>


                    {/* Messages */}
                    <div className="flex flex-col space-y-2">
                        <div className="text-white">Messages</div>
                        <div className="flex flex-col space-y-2  overflow-auto rounded-xl h-72 ">

                            <MessageTiles />
                            <MessageTiles />
                            <MessageTiles />
                            <MessageTiles />



                        </div>



                    </div>

                </div>

                {/* Music */}
                <div className='flex flex-col space-y-4'>
                    <div className='text-white text-base'>Music</div>
                    {/* List */}
                    <div className='flex flex-row overflow-auto space-x-10'>
                        {/* Card */}
                        {messages.map(item => <RecentCard
                            key={item.snippet.title}
                            image={item.snippet.thumbnails.high.url}
                            name={item.snippet.title}
                            url={item.id.videoId}
                        />
                        )}


                    </div>
                </div>

                <div className='flex flex-col space-y-4'>
                    <div className='text-white text-base'>5 mins</div>
                    {/* List */}
                    <div className='flex flex-row overflow-auto space-x-10'>
                        {/* Card */}
                        {messages.map(item => <RecentCard
                            key={item.snippet.title}
                            image={item.snippet.thumbnails.high.url}
                            name={item.snippet.title}
                            url={item.id.videoId}
                        />
                        )}


                    </div>
                </div>

            </div>
        </>

    );
}

export default SearchDelegate;