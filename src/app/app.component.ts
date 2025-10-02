import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'about-us';
}
