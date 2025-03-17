import './page.scss'
import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="container-fluid blue_bg">
            <div>
                <div className="container-fluid" style={{padding: 0}}>
                    <div className='auto_height'>
                        <div>
                            <div className="to_hide">
                                <img src="/images/main_drawing.svg"/>
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