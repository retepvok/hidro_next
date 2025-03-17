'use client';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.scss';
import Height_adjuster from "./components/height_adjuster";
import NavigationBar from "./components/header/header";
import {roboto} from './fonts';
import {usePathname} from "next/navigation";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const routeClass = pathname === '/'
        ? 'home-page'
        : pathname.replace(/\//g, '-').substring(1) || 'home-page';

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>Hidroworks</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        </head>
        <body className={`${roboto.className} route-${routeClass}`}>
        <Height_adjuster/>
        <NavigationBar/>
        {children}
        </body>
        </html>
    )
}
