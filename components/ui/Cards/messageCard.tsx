import Image, { StaticImageData } from "next/image";


const MessageCard = ({image, name, url}:{image: string; name: string; url: string}) => {
    return (
        <>
            <div className='flex flex-col space-y-2'>
                {/* Image */}
                <div className='relative h-60 bg-white rounded-lg overflow-clip  shadow-lg mb-4'>
                    <Image alt='Card Image' layout="fill"  src={image} style={{objectFit: 'cover'}} />
                </div>
                {/* Text */}
                <div className='flex flex-col space-y-1'>
                    <div className='text-gray-50 text-[15px]  truncate '>{name}</div>
                    <div className='opacity-[.5] text-[12px]'>2 days ago</div>
                </div>

            </div>
        </>
    );
}

export default MessageCard;
