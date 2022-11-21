import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  @Input("unless") set value(condition:boolean){
    if (condition) {
      this.vc.clear();
    }else{
      this.vc.createEmbeddedView(this.template);
    }
  }  
  constructor(public template:TemplateRef<any>,public vc:ViewContainerRef) { }

}
