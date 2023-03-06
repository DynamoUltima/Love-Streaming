import { useRouter } from "next/router";
import MessageCard from "../components/ui/Cards/messageCard";
import { messages } from "../data/sample";

const TagDetailPage = () => {
    const router = useRouter();
    const {  title } = router.query;
    return (
        <>
        <div className="h-screen flex flex-col space-y-4 px-4 overflow-auto">
                    <div className="text-white text-5xl py-6">{title}</div>
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

export default TagDetailPage;