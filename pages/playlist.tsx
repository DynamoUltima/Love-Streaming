import Tray from "../components/pillTray";
import PlaylistCard, { PlaylistStats } from "../components/ui/Cards/playlistCard";

const PlayList = () => {
    let noOfPlaylists = 10

  return (
    <div className="h-screen w-full ">
      <Tray />

      <div className="grid grid-cols-4 gap-4 mt-5">
      <PlaylistStats {...{ noOfPlaylists }}/>
      {[...Array(noOfPlaylists)].map((_, index) => (
      <PlaylistCard key={index} />
    ))}
      </div>
    </div> 
  );
};

export default PlayList;
