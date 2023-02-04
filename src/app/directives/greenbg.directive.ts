import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[greenBg]'
})
export class GreenbgDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() hoverColor: string = 'yellow'
  @HostBinding('style.backgroundColor') bgColor!: string;

  constructor(private elRef: ElementRef) { 
  }

  ngOnInit(): void {
    this.bgColor = this.defaultColor
  } 


  @HostListener('mouseenter') onMouseover(evt: Event) {
    // this.elRef.nativeElement.style.background = 'yellow'
    this.bgColor = this.hoverColor
  }
  
  @HostListener('mouseleave') onMouseleave(evt: Event) {
    // this.elRef.nativeElement.style.background = 'transparent'
    this.bgColor = this.defaultColor
  }
}