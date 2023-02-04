import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[showOdd]'
})
export class ShowOddDirective {
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  elementt!: number;

  @Input() set showOdd(elements: any) {
    for (let element of elements) {
      if (element % 2 == 0)
        this.vcRef.createEmbeddedView(this.templateRef)
        this.templateRef.elementRef.nativeElement.previousElementSibling.childNodes[0].innerHTML = element;      
    }
  }
}
