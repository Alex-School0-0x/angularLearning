import { Component } from '@angular/core';
import { GenericGetServiceService as GenService } from './Services/generic-get-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users$: Observable<User[]>; 

  constructor(private service: GenService<User>) {
    this.service.setEndPoint('User');
    this.users$ = this.service.getAll();
  }
}
