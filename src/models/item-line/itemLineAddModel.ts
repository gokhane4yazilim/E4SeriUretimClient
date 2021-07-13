export class ItemLineAddModel {
    amount?: number;
    addAmount?: number;
    price?: number;
    vatRate?: number;
    discount?: number;
    mainAmount?: number;
    lineType: string;
    warehouseId?: number;
    partnerId: number;
    itemId: number;
    unitId?: number;
    total?: number;
    totalVat?: number;
    totalNet?: number;
    creationDate: Date;
    priceTypeId: number;
}
