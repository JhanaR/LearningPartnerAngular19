import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgforPageComponent } from './components/ngfor-page/ngfor-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn';
}
