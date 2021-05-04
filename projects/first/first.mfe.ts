import {SharedMfe, SharedMfeModule} from '@angular-mfe/shared';
import {Component, NgModule} from '@angular/core';
import { AgGridColumn, AgGridModule } from 'ag-grid-angular';

export const id = 'FirstMfeModule';

@Component({
  selector: 'first-mfe',
  template: `
    <p>First Angular Micro Frontend</p> 
    <ag-grid-angular
    style="width: 500px; height: 150px;"
    (onGridReady)="onGridReady($event)"
    class="ag-theme-alpine"
    [rowData]="rowData"
    [columnDefs]="columnDefs">
</ag-grid-angular>
    <p>
      <shared-component></shared-component>
    </p>
  `
})
export class EntryComponent {
    columnDefs=  [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ];
    onGridReady($event){
      console.log($event)
    }
    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
    constructor(private sharedMfe: SharedMfe) {
        sharedMfe.registerMfe('MFE-ONE', EntryComponent);
    }
}

@NgModule({
  id,
  declarations: [EntryComponent],
  imports: [SharedMfeModule,AgGridModule]
})
export class FirstMfeModule {
}
