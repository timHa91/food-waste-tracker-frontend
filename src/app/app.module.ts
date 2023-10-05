import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecordsModule } from './records/records.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecordListComponent } from './records/record-list/record-list.component';
import { AddRecordModule } from './add-record/add-record.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WasteReasonPopupComponent } from './waste-reason-popup/waste-reason-popup.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  { path: 'records', component: RecordListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WasteReasonPopupComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    RecordsModule,
    AddRecordModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
