import MessageCard from "../components/ui/Cards/messageCard";
import { messages } from "../data/sample";
import { HeartIcon } from "@heroicons/react/24/solid"

const Liked = () => {
    return (
        <>
            <div className="h-screen flex flex-col space-y-4 px-4 overflow-auto">
                <div className="flex flex-col space-y-0">
                    <div className=" flex space-x-1">
                        <HeartIcon className="text-blue-gray-100 square w-12" />
                        <div className="text-white text-5xl py-6">Liked</div>

                    </div>
                    <div className="text-gray-500 text-xs">32 messages</div>
                </div>

                <div className="  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 md:gap-4 gap-8 gap-y-12">
                    {
                        messages.map(item =>

                            <MessageCard
                                key={item.snippet.title}
                                image={item.snippet.thumbnails.high.url}
                                name={item.snippet.title}
                                url={item.id.videoId}
                            />

                        )

                    }
                </div>
            </div>
        </>

    );
}

export default Liked;