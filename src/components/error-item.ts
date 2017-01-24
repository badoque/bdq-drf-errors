import { Component } from '@angular/core';

@Component({
    selector: 'bdq-error-item',
    template: `
      <li class="bdq-error-item">
        <ng-content></ng-content>
      </li>
    `
})
export class BdqDRFErrorItemComponent {}