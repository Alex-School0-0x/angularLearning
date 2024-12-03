import { Component } from '@angular/core';
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
  isVis : boolean = false;
  showArray : string = "";
  inputText : string = "";
  index : number = 0;

  create(name : string) : void {
    if (name != ""){
      this.names.push(name);
    }
    this.inputText = "";
  }

  read() : void {
    this.isVis = false;
    this.showArray = this.names.toString();
    this.isVis = true;
  }

  update() : void {

  }

  delete() : void {

  }

  Choose() : void {
    if (this.index >= this.names.length) {
      this.index = this.names.length -1;
    }
    if (this.index < 0) {
      this.index = 0;
    }
  }
}
