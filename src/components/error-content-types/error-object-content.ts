import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdq-error-object-content',
  template: `
    <span class="bdq-error-object-content"> 
      <bdq-error-list >
        <bdq-error-item *ngFor="let key of keys(error)">
          <bdq-error-label> {{keyToNameMap[key]}}: </bdq-error-label>
          <bdq-error-content [error]="error[key]" [keyToNameMap]="keyToNameMap"></bdq-error-content> 
        </bdq-error-item>
      </bdq-error-list> 
    </span>
  `,
  // entryComponents: [BdqErrorItemComponent, BdqErrorLabelComponent, 
  //   BdqErrorListComponent, BdqErrorContentComponent]
})
export class BdqDRFErrorObjectContentComponent {
  @Input() public error: any;
  @Input() public keyToNameMap: any;

  keys(dct) : Array<string> {
    return Object.keys(dct) || [];
  }
}