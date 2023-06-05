import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";
import {HiHome} from 'react-icons/hi'
import { IoGrid, IoAlbums, IoTime, IoHeart } from 'react-icons/io5'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { AiOutlineLogout } from 'react-icons/ai'
import {RiPlayListLine} from 'react-icons/ri'

const SideNav = () => {

    const router = useRouter();
    const {isToggled,toggle} = useAuth();

    console.log({toggleState:isToggled,name :'toggling'});

    const navLinks = [
        {
            name: 'Home', icon: HiHome,
            path:'/'
        },
        {
            name: 'Browse', icon: IoGrid,
            path:'/browse'
        },
        {
            name: 'Playlist', icon: IoAlbums,
            path:'/playlist'
        },
        {
            name: "History", icon: IoTime,
            path:'/history'
        },
        {
            name: 'Favourite', icon: IoHeart,
            path:'/liked'
        }
    ]

    const footerLinks = [
        {
            name: 'Profile', icon: HiOutlineUserCircle,
            path:'/'
        },
        {
            name: 'Logout', icon: AiOutlineLogout,
            path:'/browse'
        },
    ]


    let playList = [{ name: 'Gospel Jam' }, { name: 'MyHealings' }, { name: "Hard for the Lord" }]
    return (
        <>
            <div className="flex flex-col w-56 bg-mattblack h-full overflow-hidden relative">
                <div className="px-8 py-3">
                    <div className="relative flex flex-col  w-32 h-14 ">
                        <Image src={'/love-logo.png'} alt="logo" layout="fill" objectFit="contain" className='' />
                    </div>
                </div>

                
                <div className="mt-6">
                    <ul className="flex flex-col py-1">
                        {navLinks.map(link => (
                            <li key={link.name} >
                                <Link href={`${link.path}`}>
                                    <a className={router.pathname === "/" ? "navCardSelected" : "navCard"}>
                                        <div className="text-lg text-white/[.2] mr-4"><link.icon /></div>
                                        <span className="text-base font-medium text-white/[.3]">{link.name}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                </div>

                <div className="border-t border-white/[0.1] mx-5">
                        <ul className="py-4 text-xs ">
                            {
                                playList.map(play => (
                                    <li key={play.name} >
                                        <a href="http://">
                                            <div className="py-1 items-center flex gap-4  hover:bg-black/[.15] px-2">
                                                <RiPlayListLine className="text-white/[.2] text-base "/>
                                                <span className="text-sm text-white/[.4]">{play.name}</span>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                <div className="absolute bottom-8 w-full">
                    {footerLinks.map(link => (
                        <ul  key={link.name} className="">
                            <li>
                                <a href={`${link.path}`}>
                                    <div className="py-1 mx-4 items-center flex gap-4 hover:bg-black/[.15] py-2 px-2">
                                        <link.icon className=" text-white/[.2]"/>
                                        <span className="text-sm text-white/[.4]">{link.name}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </>

    );
}

export default SideNav;