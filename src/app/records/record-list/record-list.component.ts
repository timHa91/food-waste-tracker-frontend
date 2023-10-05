import { Component } from '@angular/core';
import { DailyWasteRecord, FoodWasteEntry, FoodCategory, RecordListEntry } from '../waste-record.model';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent {
  today = new Date();
  records!: RecordListEntry[];

  // constructor(private recordService: RecordService) { }

  ngOnInit() {
    // this.records = this.recordService.getRecords();
    this.records = [
      {
        recordId: 1,
        date: new Date(),
        totalQuantity: 70
      },
      {
        recordId: 2,
        date: new Date(),
        totalQuantity: 80,
      },
      {
        recordId: 3,
        date: new Date(),
        totalQuantity: 100,
      }
    ];
  }

  addRecord() {
    // Navigieren Sie zur "Add Record"-Seite, wenn der Button geklickt wird
  }
}
