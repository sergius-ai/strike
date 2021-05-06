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
import { FormControl, Form } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MainService } from '../shared/main.service';
import { ThemePalette } from '@angular/material/core';

import { HttpClient} from '@angular/common/http';

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
    styleTogg:string = "map";
    styleTogg1:string = "map1";
    point: any;
    constructor(
      public mainService: MainService,
      private httpClient: HttpClient
    ) { }
    ngOnInit(){

    }
    //sity
    count: number = 0;
    toggle(value: any) {
      this.count = value.id;
    };
    n:boolean = true;
    selectorArr:number[] = [];
    pointTr: number =0;
    selectCardPoint(id: number) {
      //n = this.selectorArr.some(id);
      //if (condition) {

    //  } else {
        this.selectorArr.push(id);

    //  }
      console.log(this.selectorArr);
      console.log(

        this.pointTr
      );

    };
    pointCount: number = 0;

    mat:boolean = true;
    mat1:boolean = false;
    toggleMap() {
      this.mat = !this.mat;
      this.mat1 = !this.mat1;
      console.log(this.mat);

    }
    //select button
    task: Task = {
    name: 'Indeterminate',
    completed: false,
    };
    allComplete: boolean = false;

    //point cluster
    public clustererOptions = {
      preset: 'islands#invertedVioletClusterIcons',
      hasBaloon: false
    };
}
