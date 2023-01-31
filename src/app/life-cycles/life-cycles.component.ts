import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  templateUrl: './life-cycles.component.html',
  styleUrls: ['./life-cycles.component.css']
})
export class LifeCyclesComponent implements OnInit {
  i: number = 0;

  @Input() value1: string | undefined;
  @Input() value2: string | undefined;
  value3:number = 0;

  constructor() { 
    console.log(++this.i, 'CONSTRUCTOR CALLED');
  }
  
  ngOnChanges(changes: SimpleChange) {
    // this one runs when @Input variables changes. Change is efective from parent Component
    console.log(++this.i, 'NG ON CHANGES CALLED');
    console.log(changes);
  }
  
  ngOnInit(): void {
    console.log(++this.i, 'NG ON INIT CALLED');
  }

  ngAfterContentInit() {
    console.log(++this.i, 'NG AFTER CONTENT INIT CALLED');
  }

  ngAfterContentChecked() {
    console.log(++this.i, 'NG AFTER CONTENT CHECKED CALLED');
  }

  ngDoCheck() {
    // runs for all available changes. Any button click in any component, promise returns some data, basically any changes
    console.log(++this.i, 'NG DO CHECK CALLED');
  }

  ngAfterViewInit() {
    console.log(++this.i, 'NG AFTER VIEW INIT CALLED');
  }

  ngAfterViewChecked() {
    console.log(++this.i, 'NG AFTER VIEW CHECKED CALLED');
  }

  ngOnDestroy() {
    console.log(++this.i, 'NG ON DESTROY CALLED');
  }
}
