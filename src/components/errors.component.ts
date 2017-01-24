import { Component, Input, OnInit } from '@angular/core';

import * as _ from "underscore";

@Component({
  selector: 'bdq-errors',
  template: `
    <bdq-error-list>
      <bdq-error-item *ngFor="let key of keys(nonFieldErrors)">
        <bdq-error-primitive-content class="bdq-non-field-error" [error]="nonFieldErrors[key]"></bdq-error-primitive-content>
      </bdq-error-item>
      <bdq-error-item *ngFor="let key of keys(commonErrors)">
        <bdq-error-label> {{keyToNameMap[key]}}: </bdq-error-label>
        <bdq-error-content [error]="commonErrors[key]"></bdq-error-content> 
      </bdq-error-item>
    </bdq-error-list>
  `,
  // entryComponents: [BdqErrorListComponent, BdqErrorLabelComponent, BdqErrorItemComponent,
  //   BdqErrorContentComponent, BdqErrorPrimitiveContentComponent]
})
export class BdqDRFErrorsComponent implements OnInit {
  @Input() public errors: any;
  @Input() public keyToNameMap: any;
  @Input() public nonFieldErrorsKey: string;
  
  commonErrors: any;
  nonFieldErrors: any;

  keys(dct) : Array<string> {
    return Object.keys(dct) || [];
  }

  ngOnInit(){
    this.commonErrors = _.omit(this.errors, this.nonFieldErrorsKey);
    this.nonFieldErrors = this.errors[this.nonFieldErrorsKey] || [];
  }
}