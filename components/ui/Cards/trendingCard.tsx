import Image from "next/image";
import ZionsHill from "/public/zions-hill.jpg"

const TrendingCard = () => {
    return (
        <>
        <div className='flex flex-col w-full space-y-2 '>
                {/* Image */}
                <div className='relative h-40 w-full bg-white rounded-lg overflow-clip  shadow-lg'>
                    <Image  alt='Card Image' objectFit="cover" layout='fill' src={ZionsHill} />
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

export default TrendingCard;