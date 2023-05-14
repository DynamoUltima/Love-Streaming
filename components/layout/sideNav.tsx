import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";
import {HiHome} from 'react-icons/hi'
import {IoGrid, IoTime, IoHeart, IoAddCircleOutline, IoAlbums} from 'react-icons/io5'
import { Icon, Text, Link as Alink, Box, Flex, List, UnorderedList, ListItem } from "@chakra-ui/react";
import {BsMusicNoteList} from 'react-icons/bs'
import  {HiOutlineUserCircle} from 'react-icons/hi'
import {AiOutlineLogout} from "react-icons/ai"

const SideNav = () => {

    const router = useRouter();
    const {isToggled,toggle} = useAuth();


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
            path:'/Liked'
        },
        {
            name: "History", icon: IoTime,
            path:'History'
        },
        {
            name: 'Liked', icon: IoHeart,
            path:'/Liked'
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
            <Box pos="relative" className="flex flex-col w-56 bg-mattblack h-full overflow-hidden">
                <div className="px-8 py-3">
                    <div className="relative flex flex-col  w-32 h-14 ">
                        <Image src={'/love-logo.png'} alt="logo" layout="fill" objectFit="contain" className='' />
                    </div>
                </div>

                
                <div className="mt-6">
                    {navLinks.map(link => (
                        <ul  key={link.name} className="flex flex-col py-1">
                            <li>
                                <Alink py={5} _hover={{textDecoration: "none"}} textAlign={"center"} href={`${link.path}`} className={router.pathname === "/" ? "navCardSelected" : "navCard"}>
                                    <Icon mr={6} as={link.icon} fontSize={20} color="whiteAlpha.500"/>
                                    <Text color="whiteAlpha.500">{link.name}</Text>
                                </Alink>
                            </li>
                        </ul>
                    ))}
                </div>

                <Box borderColor={"whiteAlpha.300"} borderTopWidth={1} mx={5} py={3}>
                    <div className="">
                        <Flex 
                            color="whiteAlpha.500" 
                            fontSize={14} 
                            borderWidth={1} 
                            borderColor={"whiteAlpha.300"} 
                            rounded={"md"}
                            align={"center"}
                            gap={3}
                            py={2}
                            px={3}
                        >
                            <Icon fontSize={20} as={IoAddCircleOutline} />
                            <Text>Create a playlist</Text>
                        </Flex>
                        {
                            playList.map(play => (
                                <Flex  my={3} key={play.name} as={Alink} _hover={{textDecoration: "none"}} align={"center"} href={`#`}>
                                    <Icon mr={3} as={BsMusicNoteList} fontSize={14} color="whiteAlpha.500"/>
                                    <Text color="whiteAlpha.500" fontSize={14}>{play.name}</Text>
                                </Flex>

                            ))
                        }
                    </div>
                </Box>

                <Box position={"absolute"} bottom={4}>
                    {footerLinks.map(link => (
                        <ul  key={link.name} className="flex flex-col py-1">
                            <li>
                                <Flex py={1} mx={4} gap={6} as={Alink} _hover={{textDecoration: "none"}} align={"center"} href={`${link.path}`}>
                                    <Icon as={link.icon} fontSize={16} color="whiteAlpha.300"/>
                                    <Text color="whiteAlpha.400" fontSize={16}>{link.name}</Text>
                                </Flex>
                            </li>
                        </ul>
                    ))}
                </Box>
            </Box>
        </>

    );
}

export default SideNav;