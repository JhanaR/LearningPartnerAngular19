import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [FormsModule,NgStyle],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  divColor1 : string = "";
  divColor2 : boolean = false;
  divColor3 : string = "pink";
  divFontColor: string = "red"

colorChange (className: string){
    this.divColor1 = className == 
    'bg-success' ? 'green' : 'aqua'; 
}

myCss = {
  "background-color": "lavender",
  "font-size": "20px",
  color: "blue",
  border: "2px solid black",
  width: "200px",
  height: "200px"
}
}
