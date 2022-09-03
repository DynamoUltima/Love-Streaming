import Navbar from "../components/ui/navbar";
import SideNav from "../components/ui/sideNav";

const HomePage = ({ children }: { children: React.ReactNode }) => {





    return (
        <div className="  m-auto h-screen grid grid-cols-6 bg-grayblack">
            {/* Side bar */}
            <div className="h-screen col-span-1">
                <SideNav />

            </div>


            {/* Main Page */}
            <div className="col-span-5 h-screen flex flex-col pb-4 ">
                <Navbar />
                {children}
            </div>


        </div>

    );
}

export default HomePage;