export class ItemLineListModel {
    id: number;
    creationDate: Date;
    amount: number;
    addAmount: number;
    price: number;
    total: number;
    vatRate: number;
    totalVat: number;
    discount: number;
    totalNet: number;
    mainAmount: number;
    lineType: string;
    warehouseId: number;
    warehouse: string;
    partnerId: number;
    partner: string;
    itemId: number;
    item: string;
    unitId: number;
    unit: string;
    priceTypeId: number;
    priceType: string;
}
