import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent implements OnInit, OnChanges{
    @Input() counterValue : any

    constructor(){
      console.log("count component constructor");
    }

    ngOnInit(){
      console.log('count component ngoninit');
      
    }
     
    ngOnChanges(changes: SimpleChanges){
      console.log('count component changes');
    }
}
