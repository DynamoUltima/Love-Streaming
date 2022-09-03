import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Carousel from './carousel';
import RisingClouds from "/public/rising-clouds.jpg"
import RecentCard from './Cards/recentCard';



const Dashboard = () => {
    return (
        <div className='relatve w-full  overflow-auto   px-4'>
            <div className='grid grid-cols-6 '>
                <div className='col-span-4 space-y-6 '>
                    <Carousel />
                    {/* Recent Uloads */}
                    <div className='flex flex-col space-y-4'>
                        <div className='text-white text-xs'>Recent Uploads</div>
                        {/*  */}
                        <div className='flex flex-row overflow-auto space-x-12'>
                            {/* Card */}
                            <RecentCard/>
                            <RecentCard/>
                            <RecentCard/>
                            <RecentCard/>
                            <RecentCard/>
                            <RecentCard/>


                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
}

export default Dashboard;