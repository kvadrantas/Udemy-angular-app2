import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[greenBg]'
})
export class GreenbgDirective implements OnInit {

  constructor(private elRef: ElementRef) { 
  }

  ngOnInit(): void {
  } 

  @HostListener('mouseenter') onMouseover(evt: Event) {
    this.elRef.nativeElement.style.background = 'yellow'
  }
  
  @HostListener('mouseleave') onMouseleave(evt: Event) {
    this.elRef.nativeElement.style.background = 'transparent'
  }
}