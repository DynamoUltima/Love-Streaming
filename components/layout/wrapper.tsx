import { MiniPlayer } from "components/ui/MiniPlayer/miniPlayer";
import { useAuth } from "components/context/authContext";
import Navbar from "components/layout/navbar";
import NavigationBar from "components/ui/navigationBar";
import SideNav from "components/layout/sideNav";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {

    const { isToggled, toggle } = useAuth()
    return (

        <div className=" h-full grid grid-cols-6 bg-grayblack">
            {/* Side bar */}
            <div className="hidden md:flex h-full col-span-1 ">
                <SideNav />
            </div>
            {/* Main Page */}
            <div className="relative md:col-span-5 overflow-y-clip col-span-6  md:h-screen  h-screen  flex    flex-col">
                <Navbar />
                {children}

                {isToggled ?
                    <MiniPlayer />
                    : <></>}
                <div className="  md:hidden ">
                    <NavigationBar />
                </div>
            </div>
        </div>

    );
}

export default PageWrapper;