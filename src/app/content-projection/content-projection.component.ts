import { Component } from '@angular/core';

@Component({
  selector: 'content-projection',
  template:`
  <h2>Conent Projection Example</h2>
  <child-content>
    <h4>Test</h4>
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
  
  `
})
export class ChildComponent {

}
