import Image from "next/image";
import RisingClouds from "/public/rising-clouds.jpg"

const RecentCard = () => {
    return (
        <>
            <div className='flex flex-col w-40 space-y-2'>
                {/* Image */}
                <div className='relative h-32 w-44 bg-white rounded-lg overflow-clip  shadow-lg'>
                    <Image alt='Card Image' layout='fill' src={RisingClouds} />
                </div>
                {/* Text */}
                <div className='flex flex-col space-y-1'>
                    <div className='text-gray-50 text-sm  truncate '>The Blessing of God upon your live</div>
                    <div className='text-gray-400 text-xs'>2 days ago</div>
                </div>

            </div>
        </>
    );
}

export default RecentCard;