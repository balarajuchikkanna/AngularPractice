import { Component, Input, SimpleChanges, OnInit, OnChanges, DoCheck, OnDestroy, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrl: './lifecyclehook.component.css'
})
export class LifecyclehookComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit
 {

  @Input() inputProperty: string;

  name: string = "Angular";
  counter: number = 0;
  constructor(){
    this.name = ""
    console.log('constructor called');
  }

  ngOnInit(){
    this.name = "Allen"
    console.log('ngOnInit Called');
  }
  ngOnChanges(){
    console.log('ngOnChanges called');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentCheck called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngOnDestroy(){
    console.log('destroy called');
  }

  increment(){
    this.counter = this.counter + 1;
  }
  decrement(){
    this.counter = this.counter - 1;
  }
}
