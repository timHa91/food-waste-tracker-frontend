import { Component } from '@angular/core';
import { DailyWasteRecord, FoodCategory, FoodWasteEntry } from '../waste-record.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent {
  record!: DailyWasteRecord;

  constructor(
    private route: ActivatedRoute,
    //private recordService: RecordService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('recordId');

    this.record = {
      date: new Date('2022-01-01'),
      turnover: 1000,
      guests: 50,
      foodWasteEntries: {
        [FoodCategory.FruitsAndVegetables]: {
          category: FoodCategory.FruitsAndVegetables,
          quantity: 10,
          reason: 'Overproduction'
        },
        [FoodCategory.DairyProducts]: {
          category: FoodCategory.DairyProducts,
          quantity: 5,
          reason: 'Spoilage'
        },
      }
    };
    // this.recordService.getRecord(id).subscribe(record => {
    //   this.record = record;
    // });
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

  getFoodWasteEntry(entryValue: unknown): FoodWasteEntry {
    return entryValue as FoodWasteEntry;
  }

  convertDateToString(date: Date) {
    return date.toISOString().split('T')[0];
  }
}
