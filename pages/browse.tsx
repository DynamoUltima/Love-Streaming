import MessageCard from "../components/ui/Cards/messageCard";
import RecentCard from "../components/ui/Cards/recentCard";
import TagCards from "../components/ui/Cards/tagCards";
import { useAuth } from "../components/context/authContext";
import SearchDelegate from "../components/ui/searchDelegate";
import { messages } from "../data/sample";
import BrowseDelegate from "../components/ui/browseDelegate";


const tagList = [
    { name: 'Love', color: 'red' },
    { name: 'Hope', color: 'blue' },
    { name: 'Holy Spirit', color: 'yellow' },
    { name: 'Shepherding', color: 'green' },
    { name: 'Tithe', color: 'teal' },
    { name: 'Prosperity', color: 'indigo' },
    { name: 'Salvation', color: 'orange' },
    { name: 'Faith', color: 'lime' },
    { name: 'Jesus', color: 'amber' },
]

const Browse = () => {

    const { isSearch, search, setSearch } = useAuth();


    return (

        <div className="h-screen w-full overflow-auto ">
            {isSearch ? <SearchDelegate /> : <BrowseDelegate />}


        </div>

    );
}

export default Browse;