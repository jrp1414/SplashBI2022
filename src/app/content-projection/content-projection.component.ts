import { Component } from '@angular/core';

@Component({
  selector: 'content-projection',
  template:`
  <h2>Conent Projection Example</h2>
  <child-content>
    <h4>Single</h4>
    <h4>Single 2</h4>
    <h4 parent>Multi</h4>
  </child-content>
  `
})
export class ContentProjectionComponent {

}


@Component({
  selector: 'child-content',
  template:`
  <ng-content></ng-content>
  <h3>Child Content</h3>  
  <ng-content select="[parent]"></ng-content>
  `
})
export class ChildComponent {

}
