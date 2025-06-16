import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,NgIf],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  name: string = 'jhana';
  isActive: boolean = false;
  isDone = true;
  currentDate: Date;
  courseName = 'React';
  placingValue: string = 'Enter something';
  inty: string = 'radio';
  selectedCity = 'CHN';
  courseDuration = '2months';
  course = '2months';
  num1:string ="";
  num2:string ="";
  result:any=null;
  
  onAdd(){
    const additi =parseInt(this.num1)+this.num2 ;
    this.result = additi;
  }
  
  constructor() {
    this.currentDate = new Date();
    setTimeout(() => {
      this.courseName = 'Angular';
    }, 6000);
  }
  
  showWelcomeMessage() {
    alert('Hi');
  }
  onCityChange() {
    alert('Changing city');
  }
  showCity(event: any) {
    alert(event.target.value);
  }
  showMessage(message: string) {
    this.courseName = message;
    alert(message);
  }
  mouseIn() {
    console.log('On Div2');
  }
  mouseOut() {
    console.log('Moved out Div2');
  }
  onCourseDurationChnage(event: any) {
    this.courseDuration = event.target.value;
    console.log('duration changed');
  }
}
