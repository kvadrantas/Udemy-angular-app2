import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app1';
  value1FromParent = 'Tekstas111';

  onButtonClick() {
    console.log('clicked');
    this.value1FromParent += 'a';
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  navigateOnClick() {
    this.router.navigate(['/page2']);
    // If you want to use relative path in programatic route
    // this.router.navigate(['/page2'], { relativeTo: this.activatedRoute });
  }
}
