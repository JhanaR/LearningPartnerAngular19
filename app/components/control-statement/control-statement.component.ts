import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
isVisible : boolean =false;
 isButton: string ="hidden";
 isOther: string ="";
 A1: string ="";
 A2: string ="";
 dayStarting: string ="";

 clickedButton(status: string) {
  debugger;
  this.isButton = status;
 }
 places: string[] = ["chn","bang","calicut","kerala"];
 students: any[]= [
  {name:"ABC",grade:"S",qualify:"true",contact:"12345678",location:"tlr"},
  {name:"DEF",grade:"H",qualify:"false",contact:"19866778",location:"Clr"},
  {name:"GHI",grade:"A",qualify:"true",contact:"18328643",location:"blr"},
  {name:"JKL",grade:"G",qualify:"false",contact:"18435678",location:"krl"},
  {name:"MNO",grade:"T",qualify:"true",contact:"18765467",location:"pnr"}
]
}
