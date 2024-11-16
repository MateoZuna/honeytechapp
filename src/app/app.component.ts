import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppViewComponent } from './Components/app-view/app-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
