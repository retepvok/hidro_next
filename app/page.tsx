import './page.scss'

export default function Page() {
    return (
        <div className="container-fluid">
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
                            <div className="btn btn-info">Tovább</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}