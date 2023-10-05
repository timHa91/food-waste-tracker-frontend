import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'records/:recordId', component: RecordDetailComponent }
]

@NgModule({
  declarations: [
    RecordListComponent,
    RecordDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RecordsRoutingModule,
    FormsModule
  ],
  exports: [
    RecordListComponent
  ]
})
export class RecordsModule { }
