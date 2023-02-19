import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  user: { id: number; name: string } = { id: 0, name: '' };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // { path: 'page2/:id/:name', component: Page2Component },
    // http://localhost:4200/page2/444444/JONAS
    // id will be 444444 and name will be JONAS
    // snapshot for reading parameters fits only if route redirects to diffedrent component. If you click some link or button, which routes to the same component on which you are- the component will not be recreated and snapshot will give you stale url parameter values.
    // To avoid this- subscribe to url parameters and observe parameter changes
    this.user.id = this.activatedRoute.snapshot.params['id'];
    this.user.name = this.activatedRoute.snapshot.params['name'];
    // Subscribe to url params
    this.activatedRoute.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }
}
