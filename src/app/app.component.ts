import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app1';
  value1FromParent = "Tekstas111"

    
  onButtonClick() {
    console.log('clicked');
    this.value1FromParent += 'a';
  }
}
