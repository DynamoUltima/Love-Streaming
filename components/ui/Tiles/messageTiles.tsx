import Image from "next/image";
import RisingClouds from "/public/rising-clouds.jpg"

const MessageTiles = () => {
    return (
        <div className="flex flex-row  justify-between space-x-2 ">
            <div className=" flex space-x-2">
                <div className="relative overflow-clip square h-16  whitespace-nowrap rounded-md">
                    <Image className="" alt='Mesage image' layout="fill" src={RisingClouds} />
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="  flex items-start text-sm text-gray-400  font-extrabold">Five ways to be Exceedingly fruitful </div>
                    <div className="text-xs text-gray-500"> 1hr 23 mins</div>
                </div>
            </div>

            <div className="text-sm text-gray-500 whitespace-nowrap">a min ago</div>

        </div>
    );
}

export default MessageTiles;