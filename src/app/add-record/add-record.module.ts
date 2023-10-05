import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importieren Sie das RouterModule

import { AddRecordRoutingModule } from './add-record-routing.module';
import { AddRecordComponent } from './add-record.component';

@NgModule({
  declarations: [AddRecordComponent],
  imports: [
    CommonModule,
    AddRecordRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class AddRecordModule { }
