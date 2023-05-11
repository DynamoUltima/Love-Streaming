import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import MostViewCard from "../components/ui/Cards/mostViewCard";
import PlaylistCard from "../components/ui/Cards/playlistCard";
import TrendingCard from "../components/ui/Cards/trendingCard";

import { HeartIcon, ShareIcon, FolderOpenIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Accordion, AccordionBody, AccordionHeader, Button } from "@material-tailwind/react";
import { SetStateAction, useState } from "react";
import Navbar from "../components/ui/navbar";
import SideNav from "../components/ui/sideNav";
import { messages } from "../data/sample";

const Player = () => {

    const router = useRouter();
    const { videoId, title } = router.query;

    const hadndleSubmit = () => { }

    const [open, setOpen] = useState(1);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };
    return (



        <div className="bg-grayblack h-full overflow-auto   w-full ">

            <div className="flex flex-row min-h-screen h-5/6 md:w-full ">
                <div className='w-full rounded-full p-6 '>
                    <div className="flex flex-col flex-1 h-full w-full ">
                        <div className="h-full rounded-xl shadow-2xl overflow-clip mb-4">
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${videoId}&rel=0`}
                                width="100%"
                                height={'100%'}
                                controls={true}
                                pip={true}

                            />
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex  flex-col  md:flex-row text-lg text-white font-bold justify-between">
                                <div>{title}</div>

                                <div className="flex  space-x-2">

                                    <Button onClick={() => hadndleSubmit} type="button" className="bg-blacklist !shadow-md p-2" nonce={undefined} onResize={undefined} onResizeCapture={undefined} >
                                        <div className="flex items-center space-x-2">
                                            <HeartIcon className="w-6 h-6" />
                                            <div className="capitalize font-[Montserrat] text-white">Like</div>
                                        </div>

                                    </Button>

                                    <Button className="bg-blacklist !shadow-md p-2" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
                                        <div className="flex items-center space-x-2">
                                            <ShareIcon className="w-6 h-6" />
                                            <div className="capitalize font-[Montserrat] text-white">Share</div>
                                        </div>

                                    </Button>

                                    <Button className="bg-blacklist !shadow-md p-2" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
                                        <div className="flex items-center space-x-2">
                                            <PlusCircleIcon className="w-6 h-6" />
                                            <div className="capitalize font-[Montserrat] text-white">Add To Playlist</div>
                                        </div>

                                    </Button>

                                </div>

                            </div>
                            {/* Description and Tags row */}
                            <div className="flex flex-row">
                                {/* Description */}
                                <div className="flex flex-col ">
                                    {/* <div>Description</div>
                                    <div>Twenty-Twenty Three (2023) – Our Year Of Exceeding Fruitfulness And Great Multiplication. 
                                    And the children of Israel were fruitful, and increased abundantly, and multiplied,
                                     and waxed exceeding mighty; and the land was filled with them. (Exodus 1:7 KJV) Be Blessed.  </div> */}
                                    <div className='flex flex-col space-y-4'>
                                        <div className='text-xs text-white'>Tags</div>
                                        <div className='flex flex-wrap text-white text-xs space-x-4 '>

                                            <button className='bg-pink-500 p-2 rounded-full px-2 shadow-md my-1'>Peace</button>
                                            <button className='bg-blue-500 p-2 rounded-full px-2 shadow-md  my-1'>Love</button>
                                            <button className='bg-red-500 p-2 rounded-full px-2 shadow-md  my-1'>Compassion</button>
                                            <button className='bg-blue-500 p-2 rounded-full px-2 shadow-md  my-1'>Righteousness</button>
                                            <button className='bg-red-500 p-2 rounded-full px-2 shadow-md  my-1'>Healing</button>
                                            <button className='bg-blue-500 p-2 rounded-full px-2 shadow-md  my-1'>Hope</button>
                                        </div>


                                    </div>

                                    {/* Separate the accordiosn and tags in to different components */}
                                    <Accordion open={open === 1} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
                                        <AccordionHeader className="text-white hover:text-gray-50  !font-medium" onClick={() => handleOpen(1)} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
                                            Decscription
                                        </AccordionHeader>
                                        <AccordionBody>
                                            Twenty-Twenty Three (2023) – Our Year Of Exceeding Fruitfulness And Great Multiplication.
                                            And the children of Israel were fruitful, and increased abundantly,
                                            and multiplied, and waxed exceeding mighty; and the land was filled with them. (Exodus 1:7 KJV) Be Blessed.
                                        </AccordionBody>
                                    </Accordion>




                                </div>

                            </div>
                        </div>

                    </div>


                </div>



                <div className=' hidden  col-span-2  md:flex flex-col overflow-auto space-y-4  px-10 py-6 bg-blacklist m-6 rounded-lg'>
                    <div className='text-white text-xs'>Number #1 Trending</div>
                    <TrendingCard />

                    {/* Tags */}
                    <div className='flex flex-col space-y-4'>
                        <div className='text-xs text-white'>Tags</div>
                        <div className='flex flex-wrap text-white text-xs space-x-4 '>

                            <button className='bg-pink-500 p-2 rounded-full px-2 shadow-md my-1'>Peace</button>
                            <button className='bg-blue-500 p-2 rounded-full px-2 shadow-md  my-1'>Love</button>
                            <button className='bg-red-500 p-2 rounded-full px-2 shadow-md  my-1'>Compassion</button>
                            <button className='bg-blue-500 p-2 rounded-full px-2 shadow-md  my-1'>Righteousness</button>
                            <button className='bg-red-500 p-2 rounded-full px-2 shadow-md  my-1'>Healing</button>
                            <button className='bg-blue-500 p-2 rounded-full px-2 shadow-md  my-1'>Hope</button>
                        </div>


                    </div>

                    {/* PlayList */}
                    <div className='space-y-4'>
                        <div className='text-white text-xs '>Popular Playlist</div>
                        <div className='flex flex-col space-y-4 h-96 overflow-auto'>
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />


                        </div>
                    </div>

                </div>



            </div>



            {/* Most Viewed */}
            <div className='flex flex-col space-y-4 p-4'>
                <div className='text-white text-xs'>Most Viewed</div>

                <div className='flex flex-row overflow-auto space-x-12'>

                    {messages.slice(0).reverse().map(item => <MostViewCard
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

    );
}

export default Player;