"use client";

import {useEffect, useRef, useState} from 'react';
import "./referneces.scss";
import api from '../services/api';

export default function Page() {
    const [categories, setCategories] = useState([]);
    const [references, setReferences] = (useState([]));
    const [category, setCategory] = useState("all");

    useEffect(() => {
        const fetchReferences = async () => {
            try {
                const response = await api.get('reference-categories');
                setCategories(response.data.data);
                const response_2 = await api.get("refernces")
                setReferences(response_2.data.data)
            } catch (error) {
                console.error('Error fetching references:', error);
            }
        };
        fetchReferences();
    }, []);

    function show(cat, event = null) {
        setCategory(cat);
    }

    return (
        <div className="container-fluid">
            <div>
                <div className="buttons-container">
                    <h4>
                        Referenciák
                    </h4>
                    <div
                        className={`btn btn-primary btn-first ${category === 'all' ? 'active' : ''}`}
                        onClick={() => show('all')}
                    >
                        Összes
                    </div>
                    {categories.map((cat) => (
                        <div key={cat.id}
                             className={`btn btn-primary ${category === cat.id ? 'active' : ''}`}
                             onClick={(e) => show(cat.id, e)}
                        >
                            {cat.name}
                        </div>
                    ))}
                </div>
                {/*<div *ngFor="let row of references; let i = index">*/}
                {/*  <div class="row row-eq-height">*/}
                {/*    <div [class]="className" *ngFor="let gal of row" (click)="openGal(gal)">*/}
                {/*      <h5>{{gal.name}}*/}
                {/*        <entypo name="down-open-big" [hidden]="gal.opened"></entypo>*/}
                {/*        <entypo name="up-open-big" [hidden]="!gal.opened"></entypo>*/}
                {/*      </h5>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div class="row row-eq-height ofh">*/}
                {/*    <div [class]="className" *ngFor="let gal of row" [@hideShow]="gal.opened ? 'show' : 'hide'">*/}
                {/*      <p>{{gal.description}}</p>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div class="row row-eq-height ofh">*/}
                {/*    <div [class]="className" *ngFor="let gal of row" [@hideShow]="gal.opened ? 'show' : 'hide'" (click)="openGallery(gal)">*/}
                {/*      <div class="thumbnails">*/}
                {/*        <div [style.backgroundImage]="getThumImgUrl(gal,0)">*/}
                {/*        </div>*/}
                {/*        <div class="spacer"></div>*/}
                {/*        <div [style.backgroundImage]="getThumImgUrl(gal,1)">*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div class="row row-eq-height ofh">*/}
                {/*    <div [class]="className" *ngFor="let gal of row">*/}
                {/*      <div class="bb"></div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
