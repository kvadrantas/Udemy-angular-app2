import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[redBg]'
})
export class RedbgDirective implements OnInit {

  constructor(private elementRef: ElementRef) { 
  }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.background='red'
  }  
}

// This is custom directive with reference. In other word you get reference to html element and then you can do, what you want to do with it
// There might be an issue when the needed element might not already be created in DOM and in that case you need to use Renderer instead of Reference for your directive