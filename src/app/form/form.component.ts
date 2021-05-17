import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // variables
  firstName: any;
  lastName:any;
  email:any;
  address:any;
  qualification:any;
  institute:any;
  course:any;
  marks:any;

  constructor() { }
 
  //first step function
  public firstStep: any = ()=> {
    if(!this.firstName){
      alert('enter first Name')
    }
    else if(!this.lastName){
      alert('enter last Name')
    }
    else if(!this.email){
      alert('enter email')
    }
   else if(!this.address){
      alert('enter address')
    }
    else {
      alert('success! now, fill next steps form')
    }

  }
  public finishFunction: any = ()=> {
    if(!this.qualification){
      alert('enter Qualification')
    }
    else if(!this.institute){
      alert('enter institute Name')
    }
    else if(!this.course){
      alert('enter course')
    }
   else if(!this.marks){
      alert('enter marks obtained')
    }
    else {
      alert('Successfully submited the form!')
    }

  }
  ngOnInit(): void {

  }


}
