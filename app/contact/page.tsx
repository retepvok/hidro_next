"use client";

import React, {useState} from 'react';
import './contact.scss';
import Height_adjuster from '../components/height_adjuster';

export default function Page() {
    const [lat, setLat] = useState(47.5489);
    const [long, setLong] = useState(19.2144);

    const mClick = () => {
        window.open('https://goo.gl/maps/xNDFHF6NrCA2', '_blank');
    };

    return (
        <div className="container-fluid">
            <Height_adjuster />
            <div>
                <div className="contact">
                    <div>
                        <div className="contact-picture">
                        </div>
                    </div>
                    <div>
                        <h4>Kovács Gergely</h4>
                        <h5>Okl. gépészmérnök</h5>
                        <div className="info info-sm">
                            <a className="info-link" href="tel:+36705557032">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                                    <defs>
                                        <style>{`.a {
                                            fill: #fff;
                                        }

                                            .b {
                                                fill: #217dd8;
                                            }`}</style>
                                    </defs>
                                    <g transform="translate(-198 -459)">
                                        <rect className="a" width="18" height="18" transform="translate(198 459)"/>
                                        <path className="b"
                                              d="M9.286,11.429,11,9.857a.525.525,0,0,1,.429-.143l.286.143,4,1.857c.286.143.286.286.286.571a3.622,3.622,0,0,1-1.143,2.571,4.092,4.092,0,0,1-3,1.143,8.7,8.7,0,0,1-4-1,18.727,18.727,0,0,1-4-2.857A24.333,24.333,0,0,1,1.714,9,19.747,19.747,0,0,1,.286,5.857,8.791,8.791,0,0,1,0,3.143,3.754,3.754,0,0,1,1,1,4.344,4.344,0,0,1,3.714,0a.742.742,0,0,1,.571.286l2.143,4a.5.5,0,0,0,.143.286A.525.525,0,0,1,6.429,5L4.571,6.714a.638.638,0,0,0,0,.714A13.642,13.642,0,0,0,6.286,9.714a14.424,14.424,0,0,0,2.286,1.857C8.857,11.714,9.143,11.714,9.286,11.429Z"
                                              transform="translate(198 459)"/>
                                    </g>
                                </svg>
                                Tel:+36705557032
                            </a>
                            <a className="info-link" href="mailto:info@hidroworks.hu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                                    <defs>
                                        <style>{`.a {
                                            fill: #fff;
                                        }

                                            .b {
                                                fill: #217dd8;
                                                fill-rule: evenodd;
                                            }`}</style>
                                    </defs>
                                    <g transform="translate(-29 -393)">
                                        <rect className="a" width="18" height="18" transform="translate(29 393)"/>
                                        <path className="b" d="M14,2H2L8,7ZM0,2A2.006,2.006,0,0,1,2,0H14a2.006,2.006,0,0,1,2,2v8a2.006,2.006,0,0,1-2,2H2a2.006,2.006,0,0,1-2-2Z"
                                              transform="translate(29 395)"/>
                                    </g>
                                </svg>
                                E-mail: info@hidroworks.hu
                            </a>
                            <a className="info-link" href="https://goo.gl/maps/xNDFHF6NrCA2" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                                    <defs>
                                        <style>{`.a {
                                            fill: #fff;
                                        }

                                            .b {
                                                fill: #217dd8;
                                                fill-rule: evenodd;
                                            }`}</style>
                                    </defs>
                                    <g transform="translate(-207 -596)">
                                        <rect className="a" width="18" height="18" transform="translate(207 596)"/>
                                        <path className="b"
                                              d="M6.58,9.47A2.786,2.786,0,0,0,9.371,6.679,2.872,2.872,0,0,0,6.58,3.788,2.786,2.786,0,0,0,3.788,6.579,2.942,2.942,0,0,0,6.58,9.47ZM1.894,1.894a6.626,6.626,0,0,1,9.371,9.371L6.58,15.95,1.894,11.265A6.807,6.807,0,0,1,1.894,1.894Z"
                                              transform="translate(207.975 596.05)"/>
                                    </g>
                                </svg>
                                Cím: 2141 Csömör, Árpád u. 62.
                            </a>
                        </div>
                    </div>
                </div>
                <div className="info info-xs">
                    <a className="info-link" href="tel:+36705557032">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                            <defs>
                                <style>{`.a {
                                    fill: #fff;
                                }

                                    .b {
                                        fill: #217dd8;
                                    }`}</style>
                            </defs>
                            <g transform="translate(-198 -459)">
                                <rect className="a" width="18" height="18" transform="translate(198 459)"/>
                                <path className="b"
                                      d="M9.286,11.429,11,9.857a.525.525,0,0,1,.429-.143l.286.143,4,1.857c.286.143.286.286.286.571a3.622,3.622,0,0,1-1.143,2.571,4.092,4.092,0,0,1-3,1.143,8.7,8.7,0,0,1-4-1,18.727,18.727,0,0,1-4-2.857A24.333,24.333,0,0,1,1.714,9,19.747,19.747,0,0,1,.286,5.857,8.791,8.791,0,0,1,0,3.143,3.754,3.754,0,0,1,1,1,4.344,4.344,0,0,1,3.714,0a.742.742,0,0,1,.571.286l2.143,4a.5.5,0,0,0,.143.286A.525.525,0,0,1,6.429,5L4.571,6.714a.638.638,0,0,0,0,.714A13.642,13.642,0,0,0,6.286,9.714a14.424,14.424,0,0,0,2.286,1.857C8.857,11.714,9.143,11.714,9.286,11.429Z"
                                      transform="translate(198 459)"/>
                            </g>
                        </svg>
                        Tel:+3670 5557032
                    </a>
                    <a className="info-link" href="mailto:info@hidroworks.hu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                            <defs>
                                <style>{`.a {
                                    fill: #fff;
                                }

                                    .b {
                                        fill: #217dd8;
                                        fill-rule: evenodd;
                                    }`}</style>
                            </defs>
                            <g transform="translate(-29 -393)">
                                <rect className="a" width="18" height="18" transform="translate(29 393)"/>
                                <path className="b" d="M14,2H2L8,7ZM0,2A2.006,2.006,0,0,1,2,0H14a2.006,2.006,0,0,1,2,2v8a2.006,2.006,0,0,1-2,2H2a2.006,2.006,0,0,1-2-2Z" transform="translate(29 395)"/>
                            </g>
                        </svg>
                        E-mail: info@hidroworks.hu
                    </a>
                    <a className="info-link" href="https://goo.gl/maps/xNDFHF6NrCA2" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                            <defs>
                                <style>{`.a {fill: #fff;}
                                    .b {fill: #217dd8;fill-rule: evenodd;}
                                `}</style>
                            </defs>
                            <g transform="translate(-207 -596)">
                                <rect className="a" width="18" height="18" transform="translate(207 596)"/>
                                <path className="b"
                                      d="M6.58,9.47A2.786,2.786,0,0,0,9.371,6.679,2.872,2.872,0,0,0,6.58,3.788,2.786,2.786,0,0,0,3.788,6.579,2.942,2.942,0,0,0,6.58,9.47ZM1.894,1.894a6.626,6.626,0,0,1,9.371,9.371L6.58,15.95,1.894,11.265A6.807,6.807,0,0,1,1.894,1.894Z"
                                      transform="translate(207.975 596.05)"/>
                            </g>
                        </svg>
                        Cím: 2141 Csömör, Árpád u. 62.
                    </a>
                </div>
                
                {/* Google Maps iframe */}
                <div style={{ marginTop: '20px', height: '400px' }}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.4763130076986!2d19.212226776537694!3d47.54890089510576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c3fc7f317e45%3A0x4c8e5a0c46e9e891!2zQ3PDtm3DtnIsIMOBcnDDoWQgdS4gNjIsIDIxNDE!5e0!3m2!1shu!2shu!4v1710861234567!5m2!1shu!2shu" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}
