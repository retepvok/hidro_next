import React, {useState} from 'react';
import "./header.scss"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavigationBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

     const pathname = usePathname();

     const isActive = (path: string) => {
         if (path === '/' && pathname === '/') {
             return true;
         }
         return path !== '/' && pathname.startsWith(path);

     };
    return (
        <div className="header">
            <div id="align">
                <div id="brand">
                    <Link href={"/"}>
                        <img src="/images/logo.png"/>
                    </Link>
                </div>
                <div id="toggler" onClick={toggleNav}>
                    <a>
                        <img src="/images/menu-icon.svg"/>
                    </a>
                </div>
                <div id="navitems" className={isNavExpanded ? "expanded" : ""}>
                    <div>
                        <Link href={"/about"}  className={isActive('/about') ? 'active' : ''}>Rólunk</Link>
                    </div>
                    <div>
                        <Link href={"/"}>Munkáink</Link>
                    </div>
                    <div>
                        <Link href={"/"}>Bérelhető gépek</Link>
                    </div>
                    <div>
                        <Link href={"/"}>Elérhetőség</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
