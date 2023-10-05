import { Component } from '@angular/core';
import { DailyWasteRecord, FoodCategory } from '../records/waste-record.model';
import { MatDialog } from '@angular/material/dialog';
import { WasteReasonPopupComponent } from '../waste-reason-popup/waste-reason-popup.component';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent {
  record!: DailyWasteRecord;
  currentDate = new Date().toISOString().split('T')[0];

  name!: string;
  animal!: string;

  constructor(public dialog: MatDialog) { }

  openReasonDialog(): void {
    const dialogRef = this.dialog.open(WasteReasonPopupComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onSubmit(value: any) {
    this.record.date = value.creationDate;
    this.record.guests = value.guests;
    this.record.turnover = value.turnover;

    this.record.foodWasteEntries = Object.fromEntries(
      Object.values(FoodCategory).map(category => [
        category,
        {
          quantity: value[`quantity_${category}`] || 0,
          reason: value[`reason_${category}`] || ''
        }
      ])
    );

    console.log(this.record);
  }

  ngOnInit() {
    this.record = {
      date: new Date(),
      turnover: 0,
      guests: 0,
      foodWasteEntries: Object.fromEntries(
        Object.values(FoodCategory).map(category => [
          category,
          {
            quantity: 0,
            reason: ''
          }
        ])
      )
    };
  }
}
