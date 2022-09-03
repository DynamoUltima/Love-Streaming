
import Image from "next/image";
import ZionsHill from "/public/zions-hill.jpg"

const MostViewCard = () => {
    return (

    
     <>
            <div className='flex flex-col w-56 space-y-2 '>
                {/* Image */}
                <div className='relative h-40 w-56 bg-white rounded-lg overflow-clip  shadow-lg'>
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