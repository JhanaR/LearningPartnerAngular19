import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass,FormsModule,NgIf],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
divColor1 : string = "";
  divColor2 : boolean = false;
  divColor3 : string = "";
  // isVisible: boolean = true;
  isVisible2: string = "false";

  colorChange (className: string){
    this.divColor1 = className
  }
  /*showForm(){
    //this.isVisible = !this.isVisible;
    this.isVisible = true;
  }
  hideForm(){
    this.isVisible = false;
  }*/
  
 /*form(message: string){
    this.isVisible2 = message;
 }*/
}