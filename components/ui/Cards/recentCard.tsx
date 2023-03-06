import Image from "next/image";
import Link from "next/link";
import RisingClouds from "/public/rising-clouds.jpg"
import { useRouter } from 'next/router';

const RecentCard = ({ image, name, url }: { image: string; name: string; url: string }) => {

    const router = useRouter();

    const handleClick = () => {
        router.push({
          pathname: '/player',
          query: {
            videoId: url,
            title:name
          }
        });
      };

    return (
        <>
         
                <div  onClick={handleClick} className='flex flex-col w-44 space-y-2'>
                    {/* Image */}
                    <div className='relative h-32 w-44 bg-white rounded-lg overflow-clip  shadow-lg'>
                        <Image alt='Card Image' layout='fill' src={image} />
                    </div>
                    {/* Text */}
                    <div className='flex flex-col space-y-1'>
                        <div className='text-gray-50 text-sm  truncate '>{name}</div>
                        <div className='text-gray-400 text-xs'>2 days ago</div>
                    </div>

                </div>
            
        </>
    );
}

export default RecentCard;