import MessageCard from "../components/ui/Cards/messageCard";
import { messages } from "../data/sample";

const TagDetailPage = () => {
    return (
        <>
        <div className="flex flex-col space-y-4">
                    <div className="text-white text-base">Love</div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 md:gap-4 gap-8 gap-y-12">
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

export default TagDetailPage;