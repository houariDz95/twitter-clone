import React from 'react'
import {BsHouseFill, BsBellFill} from 'react-icons/bs';
import {FiUser} from 'react-icons/fi';
import {BiLogOut} from 'react-icons/bi';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
  const items = [
    {
      lable: "home",
      href: "/",
      icon: BsHouseFill
    },
    {
      lable: "notifications",
      href: "/notifications",
      icon: BsBellFill
    },
    {
      lable: "profile",
      href: "/user/123",
      icon: FiUser
    }
  ]
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) =>(
            <SidebarItem 
            key={item.href} 
            href={item.href} 
            lable={item.lable}
            icon={item.icon}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} lable='Logout' href="/logout" />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  )
}

export default Sidebar