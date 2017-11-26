import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Christina Hsieh';
  isExpanded = true;

  toggleState() {
    this.isExpanded = !this.isExpanded;
  }
}
