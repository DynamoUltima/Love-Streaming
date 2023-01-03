import Navbar from "../components/ui/navbar";
import NavigationBar from "../components/ui/navigationBar";
import SideNav from "../components/ui/sideNav";

const HomePage = ({ children }: { children: React.ReactNode }) => {





    return (
        <div className="relative  m-auto h-full grid grid-cols-6 bg-grayblack">
            {/* Side bar */}
            <div className="hidden md:flex h-screen col-span-1 ">
                <SideNav />
            </div>


            {/* Main Page */}
            <div className=" md:col-span-5  col-span-6  h-full flex   overflow-auto flex-col">
                <Navbar />
                {children}
                <div className="  md:hidden  ">
                    <NavigationBar />
                </div>
            </div>




        </div>

    );
}

export default HomePage;