import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngfor-page',
  imports: [NgFor,FormsModule,NgIf,NgStyle],
  templateUrl: './ngfor-page.component.html',
  styleUrl: './ngfor-page.component.css'
})
export class NgforPageComponent {
places: string[] = ["chn","bang","calicut","kerala"];
students: any[]= [
  {name:"ABC",grade:"S",qualify:"true",contact:"12345678",location:"tlr",attendance: 90},
  {name:"DEF",grade:"H",qualify:"false",contact:"19866778",location:"Clr",attendance: 85},
  {name:"GHI",grade:"A",qualify:"true",contact:"18328643",location:"blr",attendance: 75},
  {name:"JKL",grade:"G",qualify:"false",contact:"18435678",location:"krl",attendance: 65},
  {name:"MNO",grade:"T",qualify:"true",contact:"18765467",location:"pnr",attendance: 99}
]
booleanList : boolean [] =[true,false,true,false,false,true];
isToggel: boolean = true;
}
