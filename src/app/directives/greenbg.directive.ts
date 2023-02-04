import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[greenBg]'
})
export class GreenbgDirective implements OnInit {

  constructor(private elRef: ElementRef) { 
  }

  ngOnInit(): void {
  } 

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent'

  @HostListener('mouseenter') onMouseover(evt: Event) {
    // this.elRef.nativeElement.style.background = 'yellow'
    this.bgColor = 'yellow'
  }
  
  @HostListener('mouseleave') onMouseleave(evt: Event) {
    // this.elRef.nativeElement.style.background = 'transparent'
    this.bgColor = 'transparent'
  }
}