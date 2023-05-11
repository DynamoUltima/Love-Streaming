import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Carousel from './carousel';
import RisingClouds from "/public/rising-clouds.jpg"
import RecentCard from './Cards/recentCard';
import MostViewCard from './Cards/mostViewCard';
import TrendingCard from './Cards/trendingCard';
import PlaylistCard from './Cards/playlistCard';
import CategoryCard from './Cards/categoryCard';
import CategorySampleCard from './Cards/categorySampleCard';
import { messages } from '../../data/sample';






const Dashboard = () => {
    return (
        <div className='relative w-full px-4 '>
            <div className='  grid grid-cols-6 gap-8 '>
                <div className=' overflow-auto  col-span-6  md:col-span-4  space-y-6  '>
                    <Carousel />
                    {/* Recent Uploads */}
                    <div className='flex flex-col space-y-4'>
                        <div className='text-white text-xs'>Recent Uploads</div>
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
                    {/* Cateogories */}
                    <div className=' md:hidden flex-col space-y-4'>
                        <div className='text-white text-xs'>Browse by Category</div>
                        {/* List */}
                        <div className='flex flex-row overflow-auto space-x-6'>
                            {/* Card */}
                            <CategoryCard />
                            <CategorySampleCard />


                        </div>

                    </div>


                    {/* Most Viewed */}
                    <div className='flex flex-col space-y-4'>
                        <div className='text-white text-xs'>Most Viewed</div>
                        {/* List */}
                        <div className='flex flex-row overflow-auto space-x-12'>
                            {/* Card */}

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



                <div className=' hidden  md:col-span-2  md:flex flex-col overflow-auto space-y-4 px-10'>
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
        </div>

    );
}

export default Dashboard;