
import Image from "next/image";
import ZionsHill from "/public/zions-hill.jpg"

const MostViewCard = () => {
    return (

    
     <>
            <div className='flex flex-col md:w-56 w-40 space-y-2 '>
                {/* Image */}
                <div className='relative md:h-40 md:w-56  h-32 w-40  bg-white rounded-lg overflow-clip  shadow-lg'>
                    <Image  alt='Card Image' layout='fill' src={ZionsHill} />
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

export default MostViewCard;