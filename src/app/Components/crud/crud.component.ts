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
  searchText : string = "";
  index : number = 0;

  create() : void {
    if (this.inputText != ""){
      this.names.push(this.inputText);
    }
    this.inputText = "";
  }

  read() : void {
    this.isVis = false;
    this.showArray = this.names.toString();
    this.isVis = true;
  }

  update() : void {
    if (this.inputText != ""){
      this.names[this.index] = this.inputText;
    }
  }

  delete() : void {

  }
}
