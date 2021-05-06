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
import { FormControl } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MainService } from '../shared/main.service';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public mainService: MainService) { }
  

  ngOnInit(): void {
  }
  //sity
  i:number = 0;
  toggle(value: any) {
    this.i = value.id;
  };

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
