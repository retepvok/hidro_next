import './page.scss'
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <div className="container-fluid blue_bg">
            <div className="main">
                <div className="container-fluid" style={{padding: 0}}>
                    <div className='auto_height'>
                        <div>
                            <div className="to_hide">
                                <Image 
                                    src="/images/main_drawing.svg"
                                    alt="Hidroworks main drawing"
                                    width={500}
                                    height={300}
                                    priority
                                />
                                <div className="stf">
                                    <h1>Üdvözli a Hidroworks!</h1>
                                    <p>Minikotró, rakodógép és hidraulika szervíz.</p>
                                    <p>Munkagép bérlés.</p>
                                    <div className="btn btn-info">Tovább</div>
                                </div>
                            </div>
                            <div className={"bg_not_sx auto_height"}>
                                <div className="stf">
                                    <h1>Üdvözli a Hidroworks!</h1>
                                    <p>Minikotró, rakodógép és hidraulika szervíz.</p>
                                    <p>Munkagép bérlés.</p>
                                    <Link href={"/about"}><div className="btn btn-info">Tovább</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
