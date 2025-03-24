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
                        <img src="/images/logo.png" alt="Logo of the company"/>
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
                        <Link href={"/references"} className={isActive('/references') ? 'active' : ''}>Munkáink</Link>
                    </div>
                    <div>
                        <Link href={"/for_rent"} className={isActive('/for_rent') ? 'active' : ''}>Bérelhető gépek</Link>
                    </div>
                    <div>
                        <Link href={"/contact"} className={isActive('/contact') ? 'active' : ''}>Elérhetőség</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
