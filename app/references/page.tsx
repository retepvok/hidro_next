export default function Page() {
    let category = "all"

    function setCategory(category) {
        category = category
    }

    return (
        <div className="container-fluid">
            <div>
                <h4>
                    Referenciák
                </h4>
                <div class="btn btn-primary btn-first" (click)="show('all')" [ngClass]="{'active':category == 'all'}">Összes</div>
                {/*<ng-container *ngFor="let cat of categories | keyvalue ">*/}
                {/*  <div class="btn btn-primary" (click)="show(cat.key, $event)" [ngClass]="{'active':category == cat.key}">{{cat.value}}</div>*/}
                {/*</ng-container>*/}
                {/*<div *ngFor="let row of orderedGalleries; let i = index">*/}
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