import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './book.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{

  response: any =  [];
  constructor(private router: Router, private bookservice: BookService){
  }
  
  ngOnInit(){
   this.bookservice.getBookDetails()
   .subscribe(data => {
    this.response = data;
    console.log(data);
    
   })
  }


  title = 'demo-app';
  name=""
  value="Balaraju"
  imgname="https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg"

  save(event: any){
    console.log("I clicked on save btn", event); 
  }

  add = () => {
    console.log(1+2);
  }

  course = ['html', 'css', 'js', 'Angular', 'react', 'sql', 'python']

  person = [
    {id:1, firstName:'Bala', lastName:'Raju'},
    {id:2, firstName:'Ram', lastName:'Raju'},
    {id:3, firstName:'bharath', lastName:'Kumar'},
    {id:4, firstName:'Rahul', lastName:'sanjay'},
    {id:5, firstName:'Virat', lastName:'Kohli'},
  ]
 
  // ngSwitch
  selectedItem='ondefaultse';

  // ngIf
  show = true;

  shows = true;
  elseblock=false;
  thenblock= false
  condition = false;

  // ngClass
  success = "text-success"
  itHasError = true;
  message = {
    "text-success": !this.itHasError,
    "text-danger": this.itHasError,
    "text-special": this.itHasError,
  }

  // how to pass the data from parent to child
  UserName = "Allen"

  // 09-05-2024
  dataFromChild = "";

  handleData(data : any){
    this.dataFromChild = data;
  }

  goToHeader(){
    this.router.navigate(['header'])
  }

  goToFooter(){
    this.router.navigate(['footer'])
  }

  getJohnData(){
    this.router.navigate(['user', '200', 'John'])
  }

  gotoPipe(){
    this.router.navigate(['pipe'])
  }

  goToLifeCycleComponent(){
   this.router.navigate(['lifeCycleComponent']) 
  }

  formComponent(){
    this.router.navigate(['formcomponent'])
  }

}

