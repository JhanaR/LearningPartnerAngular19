import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ngif-page',
  imports: [FormsModule, NgIf],
  templateUrl: './ngif-page.component.html',
  styleUrl: './ngif-page.component.css'
})
export class NgifPageComponent {
 isVisible : boolean =false;
 isButton: string ="h";
 isOther: string ="";
 A1: string ="";
 A2: string ="";

 clickedButton(status: string) {
  debugger;
  this.isButton = status;
 }
}
