import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent {
  @Output() onSearchChanged: EventEmitter<string> = new EventEmitter();
 
  searchChanged(data:Event): void {
    this.onSearchChanged.emit((<HTMLInputElement>data.target).value);
  }

}
