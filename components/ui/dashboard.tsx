import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Carousel from './carousel';
import RisingClouds from "/public/rising-clouds.jpg"
import RecentCard from './Cards/recentCard';
import MostViewCard from './Cards/mostViewCard';



const Dashboard = () => {
    return (
        <div className='relatve w-full  overflow-auto   px-4'>
            <div className='grid grid-cols-6 '>
                <div className='col-span-4 space-y-6 '>
                    <Carousel />
                    {/* Recent Uloads */}
                    <div className='flex flex-col space-y-4'>
                        <div className='text-white text-xs'>Recent Uploads</div>
                        {/* List */}
                        <div className='flex flex-row overflow-auto space-x-10'>
                            {/* Card */}
                            <RecentCard />
                            <RecentCard />
                            <RecentCard />
                            <RecentCard />
                            <RecentCard />
                            <RecentCard />


                        </div>
                    </div>
                    {/* Most Viewed */}
                    <div className='flex flex-col space-y-4'>
                        <div className='text-white text-xs'>Most Viewed</div>
                            {/* List */}
                        <div className='flex flex-row overflow-auto space-x-12'>
                            {/* Card */}
                           <MostViewCard />
                           <MostViewCard />
                           <MostViewCard />
                           <MostViewCard />


                        </div>

                    </div>


                </div>

            </div>
        </div>

    );
}

export default Dashboard;