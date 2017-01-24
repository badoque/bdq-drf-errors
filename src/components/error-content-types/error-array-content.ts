import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdq-error-array-content',
  template: `
    <span class="error-array-content"> 
      <bdq-error-list>
        <bdq-error-item *ngFor="let subError of error; let idx = index;">
          <span *ngIf="!!subError[idx]" class="bdq-error-array-item-content">
            <bdq-error-label>Item {{idx}}: </bdq-error-label>
            <bdq-error-content [error]="subError[idx]" [keyToNameMap]="keyToNameMap"></bdq-error-content> 
          </span>
        </bdq-error-item>
      </bdq-error-list> 
    </span>
  `,
  // entryComponents: [BdqErrorItemComponent, BdqErrorLabelComponent, 
  //   BdqErrorListComponent, BdqErrorContentComponent]
})
export class BdqDRFErrorArrayContentComponent {
  @Input() public error: any;
  @Input() public keyToNameMap: any;

}