import "./about.scss"

export default function Page() {
    return (
        <div className="container-fluid">
            <div>
                <div className="row">
                    <div className="col-12 pg-10">
                        <h4>Cégismertető</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 pg-10">
                        <img src="images/about_logo.svg" className="a_logo d-lg-block"/>
                        <p>Cégünk több, mint 20 éves tapasztalattal bír járműipari precíziós hidraulika javításában. Ezt a tudást használjuk fel a hidraulika, és az alkatrészgyártás területén is.</p>
                    </div>
                    <div className="col-lg-4 pg-10">
                        <p>Felkészültek vagyunk a javítandó berendezésekhez szükséges, nem beszerezhető alkatrészek legyártására a lehető legnagyobb fokú precizitással és minőségben. Fő célunk, hogy
                            az
                            általunk
                            elvégzett javítás vagy felújítás a lehető leghosszabb élettartamot biztosítsa a felhasználó számára.</p>
                    </div>
                    <div className="col-lg-4 pg-10">
                        <p>Hisszük, hogy a mai „fogyasztói társadalomban” is van igény a hosszútávú megbízhatóságra a garancián túl is, márkától függetlenül. Ennek érdekében mindent meg is teszünk,
                            legyen
                            az egy
                            egyszerű csapszeg-persely pótlás vagy egy hidraulikaszár csere.</p>
                    </div>
                </div>

                <div className="row" id="middle_divider">
                    <div className="col-12 pg-10">
                        <p>Kizárólag a legjobb anyagminőségeket, technológiákat és pontosságot alkalmazzuk, mindig a célnak megfelelően.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 pg-10">
                        <h4>Tevékenységeink</h4>
                    </div>
                </div>

                <div className="row" id="section_bottom">
                    <div className="col-lg-4 pg-10">
                        <img src="images/h_repair.svg" className="b_logo"/>
                        <h5>Hidraulika javítás</h5>
                        <p>- Munkahenger felújítás vagy gyártás akár minta vagy rajz alapján. Amennyiben szükség van, megadott paraméterek alapján, a tervezést és dokumentációt is elvégezzük</p>
                        <p> - Hidromotor javítás</p>
                        <p>- Szivattyú javítás</p>
                        <p>- Tömlő csere</p>
                        <p>- Hidraulika vezeték kiépítés, módosítás</p>
                        <p>- Hidraulikus funkciók módosítása, bővítése</p>
                        <p>- Mindennemű folyás javítása</p>
                    </div>
                    <div className="col-lg-4 pg-10">
                        <img src="images/m_repair.svg" className="b_logo"/>
                        <h5>Gépjavítás</h5>
                        <p>- Szerviztevékenység: időszakos szervizelés, beüzemelés, átalakítás</p>
                        <p>- Nagyjavítások: motorfelújítás, fődarab javítás </p>
                        <p>- Mechanikai javítások: kopott csapszegek, perselyek gyártása, cseréje, újra illesztése. Egyéb más alkatrész javítása, felújítása</p>
                        <p>- Lakatos munkák: repedt szerkezetek javítása vagy újra gyártása</p>
                        <p>- Elektromos javítás</p>
                    </div>
                    <div className="col-lg-4 pg-10">
                        <img src="images/production.svg" className="b_logo"/>
                        <h5>Gépgyártás</h5>
                        <p>- Építőipari gépek átalakítása egyedi igények szerint </p>
                        <p>- Egyedi gépek tervezése és legyártása a megrendelő igénye szerint</p>
                    </div>
                </div>
            </div>
        </div>
)
}