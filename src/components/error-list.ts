import { Component } from '@angular/core';

@Component({
    selector: 'bdq-error-list',
    template: `
      <ul class="bdq-error-list">
        <ng-content></ng-content>
      </ul>
    `
})
export class BdqDRFErrorListComponent {}