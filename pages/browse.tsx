import MessageCard from "../components/ui/Cards/messageCard";
import { messages } from "../data/sample";


const Browse = () => {
    return (

        <div className="h-screen w-full overflow-auto ">
            <div className=" flex-col 0 pr-10">
                <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-12 gap-y-12">
                    {messages.map(item =>
                        <MessageCard
                            key={item.snippet.title}
                            image={item.snippet.thumbnails.high.url}
                            name={item.snippet.title}
                            url={item.id.videoId}
                        />)}




                </div>
            </div>
        </div>

    );
}

export default Browse;