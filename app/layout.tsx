import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import HeightAdjuster from "./components/HeightAdjuster";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>Hidroworks</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        </head>
        <body>
        <HeightAdjuster/>
        <div className="header">
            <div id="align">
                <div id="brand">
                    <a>
                        <img src="/images/logo.png"/>
                    </a>
                </div>
                <div id="toggler">
                    <a>
                        <img src="/images/menu-icon.svg"/>
                    </a>
                </div>
                <div id="navitems">
                    <div>
                        <a>Rólunk</a>
                    </div>
                    <div>
                        <a>Munkáink</a>
                    </div>
                    <div>
                        <a>Bérelhető gépek</a>
                    </div>
                    <div>
                        <a>Elérhetőség</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
