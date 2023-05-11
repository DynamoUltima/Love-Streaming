import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../../context/authContext";


const MessageCard = ({image, name, url}:{image: string; name: string; url: string}) => {

    const router = useRouter();
    const {isToggled,toggle,setToggle} = useAuth();

    const handleClick = () => {
        
        if(isToggled){
            setToggle(false)
        }
        console.log({toggleState:isToggled,place:'message card'})

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
            <div onClick={handleClick} className='flex flex-col space-y-2'>
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
