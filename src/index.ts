import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { BdqDRFErrorsComponent } from './components/errors.component';
import { BdqDRFErrorItemComponent } from './components/error-item';
import { BdqDRFErrorLabelComponent } from './components/error-label';
import { BdqDRFErrorListComponent } from './components/error-list';
import { BdqDRFErrorContentComponent } from './components/error-content';
import { BdqDRFErrorPrimitiveContentComponent } from './components/error-content-types/error-primitive-content';
import { BdqDRFErrorArrayContentComponent } from './components/error-content-types/error-array-content';
import { BdqDRFErrorObjectContentComponent } from './components/error-content-types/error-object-content';

export * from './components/errors.component';
export * from './components/error-item';
export * from './components/error-label';
export * from './components/error-list';
export * from './components/error-content';
export * from './components/error-content-types/error-primitive-content';
export * from './components/error-content-types/error-array-content';
export * from './components/error-content-types/error-object-content';

@NgModule({
  imports: [CommonModule],
  exports: [ 
    BdqDRFErrorsComponent,
    BdqDRFErrorItemComponent,
    BdqDRFErrorLabelComponent,
    BdqDRFErrorListComponent,
    BdqDRFErrorContentComponent,
    BdqDRFErrorPrimitiveContentComponent,
    BdqDRFErrorArrayContentComponent,
    BdqDRFErrorObjectContentComponent
  ],
  declarations: [ 
    BdqDRFErrorsComponent,
    BdqDRFErrorItemComponent,
    BdqDRFErrorLabelComponent,
    BdqDRFErrorListComponent,
    BdqDRFErrorContentComponent,
    BdqDRFErrorPrimitiveContentComponent,
    BdqDRFErrorArrayContentComponent,
    BdqDRFErrorObjectContentComponent
  ]
})
export class BdqDRFErrors { }