import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding("style.backgroundColor") bg:string="";

  @Input("better-highlight") defaultColor:string="";
  @Input("hc") highlightColor:string="";
  @HostListener("mouseenter") onMouseEnter(){
    // this.el.nativeElement.style.backgroundColor = this.highlightColor;
    this.bg = this.highlightColor;
  }
  @HostListener("mouseleave") onMouseLeave(){
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.bg = this.defaultColor;
  }

  @HostListener("click") onClick(){
    alert("Better Highlight Clicked");
  }

  constructor(public el:ElementRef) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.bg = this.defaultColor;
  }

}
