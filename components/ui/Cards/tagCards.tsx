import { useRouter } from "next/router";

const TagCards = ({name,color}:{name:string,color:string}) => {

    const router = useRouter();

    const handleClick = () => {
        router.push({
          pathname: '/tagDetailPage',
          query: {
            title:name,
          }
        });
      };
    return (
        <>
        <div onClick={handleClick} className='flex flex-col md:w-56 w-40 space-y-2 '>
            {/* Image */}
            <div className={`relative md:h-40 md:w-56  h-32 w-40  bg-${color}-500 rounded-lg overflow-clip  shadow-lg`}>
                {/* <Image  alt='Card Image' layout='fill' src={ZionsHill} /> */}
                <div className="h-full flex flex-col items-start justify-center px-14 text-white font-bold">{name}</div>
            </div>
            {/* Text */}
            {/* <div className='flex flex-col space-y-1'>
                <div className='text-gray-50 text-sm  truncate '>The Blessing of God upon your live</div>
                <div className='text-gray-400 text-xs'>2 days ago</div>
            </div> */}

        </div>
    </>
    );
}

export default TagCards;