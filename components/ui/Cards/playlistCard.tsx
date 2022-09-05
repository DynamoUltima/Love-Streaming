import Image from "next/image";
import RisingClouds from "/public/rising-clouds.jpg"

const PlaylistCard = () => {
    return (
        <>
            <div className='flex flex-col w-full space-y-2 '>
                {/* Image */}
                <div className='relative h-40 w-full bg-white rounded-lg overflow-clip  shadow-lg'>
                    <div className="absolute z-10 bottom-0 bg-black w-full opacity-75 p-2  space-y-1 flex flex-col  px-4">
                        <div className=" flex flex-row  items-center justify-between ">
                           <div className="text-sm text-white font-extrabold">Gospel Pop</div>
                           <div className="text-xs text-gray-300">25 songs</div>
                        </div>
                        <div className="text-xs text-gray-300">2 hours ago</div>
                    </div>
                    <Image alt='Card Image' objectFit="cover" layout='fill' src={RisingClouds} />
                </div>
                

            </div>

        </>

    );
}

export default PlaylistCard;