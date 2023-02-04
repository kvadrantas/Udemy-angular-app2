import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[blueBg]'
})
export class BluebgDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }
}

// There might be an issue when the needed element might not already be created in DOM and in that case you need to use Renderer instead of Reference for your directive
// Renderer is a better approach of accessing the DOM as the Angular might not run in browser and not use DOM
