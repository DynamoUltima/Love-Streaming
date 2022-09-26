import React, { useState } from "react";
import { BellIcon,HomeIcon,UserIcon,MagnifyingGlassIcon,ClockIcon,Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import journalist  from   "../../public/journalist.jpeg"

const NavigationBar = () => {
  const Menus = [
    { name: "Home", icon: <div><HomeIcon className="w-6 h-6  "/></div>, dis: "translate-x-0" },
    { name: "Search", icon: <MagnifyingGlassIcon className="w-6 h-6 " />, dis: "translate-x-16" },
    { name: "PlayList", icon: <Bars3Icon className="w-6 h-6  "/>, dis: "translate-x-32" },
    { name: "History", icon:<ClockIcon className="w-6 h-6 "/> , dis: "translate-x-48" },
    { name: "Profile", icon: <div className="relative w-6 h-6  bg-white rounded-full overflow-clip ">
    <Image alt="profileImage" layout="fill"  objectFit="cover"  src={journalist} /></div>, dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(0);
  const [index,setIndex] = useState(0);
  return (
    <div className="bg-mattblack max-h-[4.4rem] px-6 rounded-t-xl flex justify-center">
      <ul className="flex relative  " >
        <span
          className={`bg-white duration-500  ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1  items-center "
          ></span>
          <div className=" p-4"><div className="text-black ">{Menus[index].icon}</div></div>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => {
                setActive(i);
                setIndex(i);
            }}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                {/* ${i ===4 &&" invisible"} */}
               { <div className={`text-white  ${i ===4&&i==active  &&" invisible"}`}>{menu.icon}</div>}
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100 text-white"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;