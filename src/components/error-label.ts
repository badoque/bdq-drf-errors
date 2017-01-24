import { Component } from '@angular/core';

@Component({
    selector: 'bdq-error-label',
    template: `
      <label class="bdq-error-label">
        <ng-content></ng-content>
      </label>
    `
})
export class BdqDRFErrorLabelComponent {}