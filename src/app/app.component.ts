import { Component } from '@angular/core';
import { Book } from 'src/app/classes/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex2';
  applicationName: string = "WebTech First Angular Project"
  library: Book[];

  constructor() {
    this.library = [];
    let book;
    
    for (let i = 0; i < 3; i++) {
      let title = "WebTech part " + i;
      if(i%2 === 0) {
        book = new Book(title, ["Hans Wurst", "John Doe"], true);
      } else {
        book = new Book(title, [], false);
      }
      this.library.push(book);
    }
  }
  
}
