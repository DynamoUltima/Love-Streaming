import MessageCard from "../components/ui/Cards/messageCard";
import RecentCard from "../components/ui/Cards/recentCard";
import TagCards from "../components/ui/Cards/tagCards";
import { messages } from "../data/sample";


const tagList=[
    {name:'Love',color:'red'},
    {name:'Hope',color:'blue'},
    {name:'Holy Spirit',color:'yellow'},
    {name:'Shepherding',color:'green'},
    {name:'Tithe',color:'teal'},
    {name:'Prosperity',color:'indigo'},
    {name:'Salvation',color:'orange'},
    {name:'Faith',color:'lime'},
    {name:'Jesus',color:'amber'},
]

const Browse = () => {
    return (

        <div className="h-screen w-full overflow-auto ">
            <div className=" flex flex-col 0 px-10 space-y-6">

                <div className='flex flex-col space-y-4'>
                    <div className='text-white text-base'>Recent Uploads</div>
                    {/* List */}


                    <div className='flex flex-row overflow-auto space-x-10'>
                        {/* Card */}
                        {messages.map(item => <RecentCard
                            key={item.snippet.title}
                            image={item.snippet.thumbnails.high.url}
                            name={item.snippet.title}
                            url={item.id.videoId}
                        />
                        )}


                    </div>
                </div>


                <div className="flex flex-col space-y-4">
                    <div className="text-white text-base">Browse Tags</div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 md:gap-4 gap-8 gap-y-12">
                        {
                            tagList.map(item =>
                                <TagCards key={item.name} name={item.name} color={item.color}  />
                            )

                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Browse;