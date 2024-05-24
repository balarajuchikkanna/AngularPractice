import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

today = Date.now();
name = 'Balaraju';
amount = "50000";
birthday = new Date(1998, 5, 24);

a: number = 0.259;
b: number = 0.259;  
}
