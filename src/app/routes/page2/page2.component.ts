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

    // http://localhost:4200/page2/5/edit?allowEdit=1#some-anchor
    console.log('Query params: ', this.activatedRoute.snapshot.queryParams);
    console.log('Fragment: ', this.activatedRoute.snapshot.fragment);

    // and if Query parameters may change inside same component you need Observable ans subscribe
    // to see Query param changes
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log('Query params (observer): ', params);
    });
    this.activatedRoute.fragment.subscribe((fragment: any) => {
      console.log('Fragment (observer): ', fragment);
    });
  }
}
