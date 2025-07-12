import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default-pipe',
  imports: [UpperCasePipe,LowerCasePipe],
  templateUrl: './default-pipe.component.html',
  styleUrl: './default-pipe.component.css'
})
export class DefaultPipeComponent {
  first_name : string = 'jhana';
  last_name: string = 'KARTHIK';
}
