import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable, of, from, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService } from '../shared/user.service';
import { MainService } from '../shared/main.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import {MapDirectionsService} from '@angular/google-maps';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    apiLoaded: Observable<boolean>;
    totalAngularPackages:any;
    public user: any;

    constructor (
      public mainService: MainService,
      private _userService: UserService,
      private httpClient: HttpClient,
      mapDirectionsService: MapDirectionsService
    ) {
      this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBoCGAqu7fKRErLs-lEWgu_0T_FrynfpkY', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );

    }
    array:google.maps.LatLngLiteral[] = [];
    ngOnInit(){
      this.httpClient.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
        this.totalAngularPackages = data.total;
      });
      for (let index = 0; index <= this.mainService.city[this.count].point.length; index++) {
        this.array.push({lat: this.mainService.city[this.count].point[index].lat,lng: this.mainService.city[this.count].point[index].lng});
        console.log(this.array);
      }
    }

    zalupa() {


    }

    count: number = 0;
    center: google.maps.LatLngLiteral = {lat: this.mainService.city[this.count].lat,lng: this.mainService.city[this.count].lng};
    zoom = 10;
    display:any;
    moveMap(event: google.maps.MapMouseEvent) {
      this.center = (event.latLng.toJSON());
    }

    move(event: google.maps.MapMouseEvent) {
      console.log(
        this.display = event.latLng.toJSON()
      );
    }






    referencePoints1() {

    }
    checkDeg:string = "deselectAll";
    restart() {
      this.refreshSelectorPoint();
      this.toggleMap();
      this.checkDeg = "deselectAll";
      this.disabledBut = false;
    }
    icon: string = "grading";
    plusOneIconToggle() {
      this.icon = "plus_one";
      setTimeout(() => {
        this.icon = "grading";
      }, 500);
    };
    negOneIconToggle() {
      this.icon = "exposure_neg_1";
      setTimeout(() => {
        this.icon = "grading";
      }, 500);
    };
    refreshIconToggle() {
      this.icon = "loop";
      setTimeout(() => {
        this.icon = "grading";
      }, 500);
    };
    //mat-drawer-content

    indexCount:number = 0;
    disabledBut:boolean = false;
    toggle(value: any) {
      this.count = value.id;
      if(this.indexCount > 0) {
        this.refreshIconToggle();

      }
      this.indexCount++;
      this.restart();
      this.toggleMap();
    };
    //--
    mat:boolean = true;
    mat1:boolean = false;
    styleTogg:string = "map";
    styleTogg1:string = "map1";
    toggleMap() {
      if (this.selArr.length < 1) {

      } else {
        this.mat = !this.mat;
        this.mat1 = !this.mat1;
        this.disabledBut = true;
          this.selArrdubS = "";
          for (let point of this.mainService.city[this.count].point){
            for (let sel of this.selArr){
              if (point.id == sel) {

                this.selArrdubS += "~" + point.lat + "%2C" + point.lng ;

              }
            }
          }
          console.log(this.selArrdubS);

        window.open('https://yandex.com/maps/143/kyiv/?l=masstransit&ll=&mode=routes&rtext=' + this.selArrdubS +' &rtt=pd&ruri=~~~&z=12');
        this.refreshPage() ;


      }
    }
    refreshPage() {
      window.location.reload();
    }
    public clustererOptions = {
      preset: 'islands#invertedVioletClusterIcons',
      hasBaloon: false
    };
    //mat-drawer-content
    point: any;
    pointTr: number = 0;
    pointCount: number = 0;

    n:boolean = true;

    allComplete: boolean = false;

    task: Task = {
    name: 'Indeterminate',
    completed: false,
    };
    selArrdub:string[] = [];
    selArrdubS: string = "";
    selArr:number[] = [];
    countInit:number = 0;
    refreshSelectorPoint() {
      if(this.countInit != this.count) {
        this.selArr = [];
        this.selArrdub = [];
        this.countInit = this.count;
      }
    }
    gg(point:any) {
      this.refreshSelectorPoint();
      if (this.selArr.length == 0) {
        this.selArr.push(point.id);
        this.plusOneIconToggle();
      } else {

        if (-1 != this.selArr.indexOf(point.id)) {

          let arr = this.selArr.filter(arrVal => point.id != arrVal)
          this.selArr = arr;
          this.negOneIconToggle();
        } else {
          this.selArr.push(point.id);
          this.plusOneIconToggle();
        }
        console.log(this.selArr);
      }
    }



}
