import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';


@NgModule({
  declarations: [
    RecordListComponent,
    RecordDetailComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule
  ],
  exports: [
    RecordListComponent
  ]
})
export class RecordsModule { }
