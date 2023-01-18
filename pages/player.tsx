import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import MostViewCard from "../components/ui/Cards/mostViewCard";
import PlaylistCard from "../components/ui/Cards/playlistCard";
import TrendingCard from "../components/ui/Cards/trendingCard";

const Player = () => {

    const router = useRouter();
    const { videoId } = router.query;
    return (
        <div className="bg-grayblack h-screen  w-full overflow-auto ">
            <div className="flex flex-row ">
                <div className='w-3/4 md:w-full rounded-full p-6 '>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${videoId}`}
                        width="100%"
                        height={'100%'}
                        controls={true}

                    />
                     
                </div>
              


                <div className=' hidden  col-span-2  md:flex flex-col overflow-auto space-y-4 px-10 py-6'>
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