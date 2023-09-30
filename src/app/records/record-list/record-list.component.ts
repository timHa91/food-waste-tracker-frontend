import { Component } from '@angular/core';
import { DailyWasteRecord, FoodWasteEntry, FoodCategory } from '../waste-record.model';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent {
  today = new Date();
  records!: DailyWasteRecord[];

  // constructor(private recordService: RecordService) { }

  ngOnInit() {
    // this.records = this.recordService.getRecords();
    this.records = [
      {
        date: new Date(),
        turnover: 10000,
        guests: 200,
        foodWasteEntries: {
          [FoodCategory.FruitsAndVegetables]: {
            category: FoodCategory.FruitsAndVegetables,
            quantity: 50,
            reason: 'Verfault'
          },
          [FoodCategory.DairyProducts]: {
            category: FoodCategory.DairyProducts,
            quantity: 20,
            reason: 'Quality'
          },
        }
      },
      {
        date: new Date(),
        turnover: 10000,
        guests: 200,
        foodWasteEntries: {
          [FoodCategory.FruitsAndVegetables]: {
            category: FoodCategory.FruitsAndVegetables,
            quantity: 20,
            reason: 'Verfault'
          },
          [FoodCategory.DairyProducts]: {
            category: FoodCategory.DairyProducts,
            quantity: 20,
            reason: 'Quality'
          },
        }
      },
      {
        date: new Date(),
        turnover: 10000,
        guests: 200,
        foodWasteEntries: {
          [FoodCategory.FruitsAndVegetables]: {
            category: FoodCategory.FruitsAndVegetables,
            quantity: 20,
            reason: 'Verfault'
          },
          [FoodCategory.DairyProducts]: {
            category: FoodCategory.DairyProducts,
            quantity: 20,
            reason: 'Quality'
          },
        }
      }
    ];
  }

  addRecord() {
    // Navigieren Sie zur "Add Record"-Seite, wenn der Button geklickt wird
  }

  sumQuantity(record: DailyWasteRecord) {
    let quantities = Object.values(record.foodWasteEntries).map(entry => entry.quantity);
    return quantities.reduce((total, quantity) => total + quantity, 0);
  }
}
