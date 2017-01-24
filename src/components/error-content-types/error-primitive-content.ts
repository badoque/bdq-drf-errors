import { Component, Input } from '@angular/core';

@Component({
    selector: 'bdq-error-primitive-content',
    template: `
      <span class="bdq-error-primitive-content"> 
        {{renderError(error)}}
      </span>
    `
})
export class BdqDRFErrorPrimitiveContentComponent {
  @Input() public error: string|number;

  renderError(err){
    if(typeof(err) === 'object'){
      return err.join(' ');
    } else {
      return err;
    }
  }
}