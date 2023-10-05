export enum FoodCategory {
    FruitsAndVegetables = 'Fruits & Vegetables',
    DairyProducts = 'Dairy Products',
    Sides = 'Sides',
    Dessert = 'Dessert',
    SaucesAndSoups = 'Sauces & Soups',
    Sandwiches = 'Sandwiches',
    SaladPreparations = 'Salad Preparations',
    BanquetsBuffetsAndCatering = 'Banquets, Buffets & Catering',
    Beverages = 'Beverages',
    TrimWasteAvoidable = 'Trim waste avoidable',
    PlateWasteBreakfast = 'Plate Waste Breakfast',
    PlateWasteLunch = 'Plate Waste Lunch',
    PlateWasteDinner = 'Plate Waste Dinner',
}

export interface FoodWasteEntry {
    category: FoodCategory;
    quantity: number;
    reason: string;
}

export interface RecordListEntry {
    recordId: number;
    date: Date;
    totalQuantity: number;
}

export interface DailyWasteRecord {
    date: Date;
    turnover: number;
    guests: number;
    foodWasteEntries: { [category in FoodCategory]?: FoodWasteEntry };
}