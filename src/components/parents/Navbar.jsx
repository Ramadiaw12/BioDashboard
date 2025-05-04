import React from "react";
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';



const NavBar = () => {
    
      
    return (
        <>
            {/* <h1 className="text-xl">SampleTrack</h1>
            <div>
                <button className="btn rounded-none px-16">Ajouter un échantillons...</button>
            </div> */}
            <div className="navbar  shadow-sm bg-green-950">
            <div className=" flex flex-1 justify-start">
                <a className=" text-amber-50 font-bold text-xl">SampleTrack</a>
            </div>
            <div className="flex gap-4">
                <input type="text" placeholder="Ajouter un échantillon" className="input input-bordered w-24 md:w-auto rounded-lg  border-amber-50" />
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://imgs.search.brave.com/Mwng2cGBtOOR9gWD-b52Px0qNra9CEqZDVno-IoNL5o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/Njc4MDk1MC9mci9w/aG90by9pbmclQzMl/QTluaWV1cnMtbG9n/aWNpZWxzLWNvbGxh/Ym9yYW50LXN1ci11/bi1wcm9qZXQtYW5h/bHlzYW50LWR1LWNv/ZGUtc3VyLWRlcy0l/QzMlQTljcmFucy1k/b3JkaW5hdGV1ci5q/cGc_Yj0xJnM9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUpxS0VZRTly/bF9pMXR3MlVGTzNC/TTRRbkg4dTgxRVg3/TVd0akNJaTFqdzQ9" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
    
        </>
    )
}
export default NavBar;