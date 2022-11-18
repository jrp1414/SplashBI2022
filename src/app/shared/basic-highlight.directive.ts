import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
 selector:"[basic-highlight]"   
})
export class BasicHighlightDirective {
    
    constructor(public el:ElementRef) {
       console.log(el);
    }
    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = 'yellow';
        this.el.nativeElement.style.color = 'blue';
    }

}