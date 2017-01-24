import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdq-error-content',
  template: `
    <span class="bdq-error-content">
      <bdq-error-array-content *ngIf="isArray(error)" [error]="error" [keyToNameMap]="keyToNameMap">
      </bdq-error-array-content>
      
      <bdq-error-object-content *ngIf="isObject(error)" [error]="error" [keyToNameMap]="keyToNameMap">
      </bdq-error-object-content>
      
      <bdq-error-primitive-content *ngIf="isPrimitive(error)" [error]="error">
      </bdq-error-primitive-content>
    </
    span>
  `,
  // entryComponents: [BdqErrorPrimitiveContentComponent, BdqErrorArrayContentComponent, 
  //   BdqErrorObjectContentComponent]
})
export class BdqDRFErrorContentComponent {
  @Input() public error: any;
  @Input() public keyToNameMap: any;

  isArray(err){
    return typeof(err) === 'object' && err.length !== undefined && err.length > 0 && typeof(err[0]) === 'object';
  }

  isObject(err){
    return typeof(err) === 'object' && err.length === undefined;
  }
  
  isPrimitive(err){
    return !this.isArray(err) && !this.isObject(err);
  }

}