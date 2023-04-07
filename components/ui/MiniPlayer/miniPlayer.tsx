import ReactPlayer from "react-player"


export const MiniPlayer = () => {
    const videoId = 'Jgoj_X56UQA';

    return (
        <div className="h-1/3 absolute bottom-0 right-0 z-20 w-1/3 rounded-xl shadow-2xl mb-8 overflow-clip  flex flex-col">
          <div className="flex bg-blue-50"> hello</div>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}&rel=0`}
                width="100%"
                height={'100%'}
                controls={true}
                pip={true}

            />
        </div>
    )
}