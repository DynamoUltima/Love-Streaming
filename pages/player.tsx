import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import MostViewCard from "../components/ui/Cards/mostViewCard";
import PlaylistCard from "../components/ui/Cards/playlistCard";
import TrendingCard from "../components/ui/Cards/trendingCard";

import { HeartIcon, ShareIcon,FolderOpenIcon,PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

const Player = () => {

    const router = useRouter();
    const { videoId } = router.query;

    const hadndleSubmit =()=>{}
    return (



        <div className="bg-grayblack h-screen  w-full overflow-auto ">
            <div className="flex flex-row h-4/6 md:w-full ">
                <div className='w-full rounded-full p-6 '>
                    <div className="flex flex-col flex-1 h-full w-full ">
                        <div className="h-full rounded-xl shadow-2xl overflow-clip mb-4">
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width="100%"
                                height={'100%'}
                                controls={true}
                                pip={true}
                            />
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex text-lg text-white font-bold justify-between">
                                <div>Benefits of Speaking in Tongues</div>
                                <div className="flex  space-x-2">
                                    <Button   onClick={() => hadndleSubmit} type="button" className="bg-blacklist !shadow-md p-2"  nonce={undefined} onResize={undefined} onResizeCapture={undefined} >
                                        <div className="flex items-center space-x-2">
                                            <HeartIcon className="w-6 h-6" />
                                            <div className="capitalize font-[Montserrat] text-white">Like</div>
                                        </div>

                                    </Button>

                                    <Button  className="bg-blacklist !shadow-md p-2"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
                                        <div className="flex items-center space-x-2">
                                            <ShareIcon className="w-6 h-6" />
                                            <div className="capitalize font-[Montserrat] text-white">Share</div>
                                        </div>

                                    </Button>

                                    <Button className="bg-blacklist !shadow-md p-2"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
                                        <div className="flex items-center space-x-2">
                                            <PlusCircleIcon className="w-6 h-6" />
                                            <div className="capitalize font-[Montserrat] text-white">Add To Playlist</div>
                                        </div>

                                    </Button>

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
                {/* List */}
                <div className='flex flex-row overflow-auto space-x-12'>
                    {/* Card */}
                    <MostViewCard />
                    <MostViewCard />
                    <MostViewCard />
                    <MostViewCard />
                    <MostViewCard />
                    <MostViewCard />
                    <MostViewCard />
                    <MostViewCard />


                </div>

            </div>

        </div>

    );
}

export default Player;