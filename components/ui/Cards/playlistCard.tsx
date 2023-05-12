import Image from "next/image";
import RisingClouds from "/public/rising-clouds.jpg";
import Albums from "/public/Albums.png";

export const PlaylistStats = ({ noOfPlaylists }: { noOfPlaylists:number }) => {
  return (
    <>
      <div className={`flex flex-col space-y-2 w-full`}>
        {/* Image */}
        <div className="relative h-40 w-full bg-light-blue-600 rounded-lg overflow-clip  shadow-lg">
          <div className="absolute z-10 bottom-0 w-full opacity-75 p-2  space-y-1 flex flex-col  px-4">
            <div className=" flex flex-row  items-center justify-between ">
              <div>
                <p className="text-2xl text-white font-black">
                  My Playlists
                </p>

                <p className="text-xs text-gray-300">{noOfPlaylists + (noOfPlaylists>1?' playlists':'playlist')}</p>
              </div>
              
              <Image
            alt="Card Image"
            width={50}
            height={50}
            // objectFit="cover"
            src={Albums}
          />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PlaylistCard = () => {
  return (
    <>
      <div
        className={`flex flex-col  space-y-2 w-full`}
      >
        {/* Image */}
        <div className="relative h-40 w-full bg-white rounded-lg overflow-clip  shadow-lg">
          <div className="absolute z-10 bottom-0 bg-black w-full opacity-75 p-2  space-y-1 flex flex-col  px-4">
            <div className=" flex flex-row  items-center justify-between ">
              <div className="text-sm text-white font-extrabold">
                Gospel Pop
              </div>
              <div className="text-xs text-gray-300">25 songs</div>
            </div>
            <div className="text-xs text-gray-300">2 hours ago</div>
          </div>
          <Image
            alt="Card Image"
            objectFit="cover"
            layout="fill"
            src={RisingClouds}
          />
        </div>
      </div>
    </>
  );
};

export default PlaylistCard;
