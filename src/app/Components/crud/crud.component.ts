import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CRUDComponent {
  names : string[] = [];

  create() : void {
    const input = prompt("new Input");
    if (input != null)
      this.names.push(input.toString());
  }

  read() : void {
    console.log(this.names)
  }

  update() : void {
    let input = prompt("Witch one du you want to change")
    this.names
  }

  delete() : void {

  }
}
