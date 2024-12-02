import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CRUDComponent } from "./Components/crud/crud.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CRUDComponent],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: '<app-crud /><router-outlet />',
})
export class AppComponent {

}
